import express from "express";
import {
  submitContactForm,
  getRecentSubmissions,
} from "../controllers/contactController.js";

const router = express.Router();

// POST - Submit a new contact form
router.post("/contact", submitContactForm);

// GET - Retrieve recent form submissions
router.get("/recent-contacts", getRecentSubmissions);

export const contactRoutes = router;
