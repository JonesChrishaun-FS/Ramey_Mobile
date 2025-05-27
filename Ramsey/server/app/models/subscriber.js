import mongoose from "mongoose";

const subscriberFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  preferredContact: { type: String },
});

export const Subscriber = mongoose.model("Subscription", subscriberFormSchema);
