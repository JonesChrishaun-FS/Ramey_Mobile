import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  make: { type: String, required: true, trim: true },
  year: { type: Number, required: true, trim: true },
  date: {
    type: Date,
    require: true,
  },
  time: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
  isRecentlySubmitted: {
    type: Boolean,
    default: true,
  },
});

// Create a TTL index that will automatically set isRecentlySubmitted to false after 10 minutes
contactFormSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 600,
    partialFilterExpression: { isRecentlySubmitted: true },
  }
);

export const ContactForm = mongoose.model("ContactForm", contactFormSchema);
