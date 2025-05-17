const express = require("express");
const router = express.Router();
const formRoutes = require("formRoutes");
const subRoutes = require("./subRoutes");

router.get("/contact", formRoutes);
router.get("/subscription", subRoutes);

module.exports = router;
