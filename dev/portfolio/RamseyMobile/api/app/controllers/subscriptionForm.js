const subForm = require("../models/subForm");
const messages = require("../../messages/messages");

const createSub = async (req, res) => {
  try {
    await subForm.create(req.body);
    res.status(201).json({
      message: messages.subscription,
    });
  } catch (error) {
    if (!email || !email.includes("@")) {
      return res.status(400).send({ message: messages.invalid_Email });
    }
  }
};

module.exports = { createSub };
