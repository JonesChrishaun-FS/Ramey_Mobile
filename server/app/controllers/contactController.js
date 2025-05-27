import { ContactForm } from "../models/contactForm.js";
import messages from "../../messages/messages.js";
import { sendContactFormEmail } from "../../utils/emailService.js";

export const submitContactForm = async (req, res) => {
  try {
    await ContactForm.create(req.body);

    // Save to database
    await ContactForm.save();

    // Send email notification
    await sendContactFormEmail(ContactForm);

    // Set a timeout to update isRecentlySubmitted after 10 minutes
    setTimeout(async () => {
      try {
        await ContactForm.findByIdAndUpdate(ContactForm._id, {
          isRecentlySubmitted: false,
        });
        console.log(`Updated submission ${ContactForm._id} to not recent`);
      } catch (error) {
        console.error("Error updating recent status:", error);
      }
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    try {
      res.status(201).json({
        success: true,
        message: messages.form_submitted,
        data: newContact,
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  } catch (error) {
    console.error();
  }
};

export const getRecentSubmissions = async (req, res) => {
  try {
    // Get submissions from the last 24 hours, sorted by newest first
    const recentSubmissions = await ContactForm.find({
      isRecentlySubmitted: true,
    })
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: recentSubmissions.length,
      data: recentSubmissions,
    });
  } catch (error) {
    console.error("Error fetching recent submissions:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
