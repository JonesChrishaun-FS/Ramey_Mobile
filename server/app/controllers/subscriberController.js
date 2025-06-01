import { Subscriber } from "../models/subscriber.js";
import messages from "../../../../server/messages/messages.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const Subscribe = async (req, res) => {
  try {
    const newSubscriber = await Subscriber.create(req.body);
    await newSubscriber.save();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.COMPANY_EMAIL,
      subject: "New Subscriber",
      html: `<h2>New Auto Service Subscription</h2>
        <p><strong>Name:</strong> ${newSubscriber.name}</p>
        <p><strong>Phone:</strong> ${newSubscriber.phone}</p>
        <p><strong>Email:</strong> ${newSubscriber.email}</p>
        <p><strong>Preferred Contact:</strong> ${newSubscriber.preferredContact}</p>`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      try {
        res.status(201).json({
          success: true,
          message: messages.form_submitted,
          data: newSubscriber,
        });
      } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          success: false,
          message: "Server error",
          error: error.message,
        });
      }
    });
  } catch (error) {
    console.error("Error adding subscriber:", error);
    res.status(500).send("Error adding subscriber");
  }
};
