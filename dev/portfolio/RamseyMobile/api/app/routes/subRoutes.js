const router = require("express").Router();
const { createSub } = require("../controllers/subscriptionForm");
const valEmail = require("../../utils/validator");

router.post("/", createSub, valEmail.validateEmail);

module.exports = router;
