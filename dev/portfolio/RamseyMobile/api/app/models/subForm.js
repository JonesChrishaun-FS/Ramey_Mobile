const mongoose = require("mongoose");

const subForm = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Subscription", subForm);
