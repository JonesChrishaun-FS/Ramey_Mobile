const serviceForm = require("../models/serviceForm");
const messages = require("../../messages");

const createForm = async (req, res) => {
  try {
    await serviceForm.create(req.body);
    res.status(201).json({
      message: messages.form_submitted,
      ...req.body,
      status: true,
    });
  } catch (error) {}
};

//const getInfo =

//const updateForm =

//const deleteForm =

module.exports = { createForm };
