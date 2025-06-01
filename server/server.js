import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import { contactRoutes } from "./app/routes/contactRoutes.js";
import { subscribeRoutes } from "./app/routes/subscribeRoutes.js";
import connectDB from "./app/db/config.js";

//Adding PORT
const PORT = process.env.PORT || 8000;

const app = express();

dotenv.config();

//Connecting mongoDB
connectDB();

//Response data to return json
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use(express.json());
app.use("/api", contactRoutes);
app.use("/api", subscribeRoutes);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//Connecting server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
