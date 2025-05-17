const router = require("express").Router();
const { createForm } = require("../controllers/contactForm");
const valPhone = require("../../utils/validator");

router.post("/", createForm, valPhone.validatePhone);

module.exports = router;
