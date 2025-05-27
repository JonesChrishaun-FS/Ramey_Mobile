import express from "express";
import { Subscribe } from "../controllers/subscriberController.js";

const router = express.Router();

// POST - Submit a new subscription form
router.post("/subscribe", Subscribe);

export const subscribeRoutes = router;
