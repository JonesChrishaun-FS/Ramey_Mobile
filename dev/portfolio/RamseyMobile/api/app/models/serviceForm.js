const mongoose = require("mongoose");

const serviceForm = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  model: { type: String, required: true },
  make: { type: String, required: true },
  year: { type: Number, required: true },
  date: { type: String, require: true },
  time: { type: String, required: true },
  comment: { type: String, required: true, max: 350 },
});

module.exports = mongoose.model("Form", serviceForm);
