import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { contactRoutes } from "./app/routes/contactRoutes.js";
import { subscribeRoutes } from "./app/routes/subscribeRoutes.js";
import connectDB from "./app/db/config.js";

//Adding PORT
const PORT = process.env.PORT || 3000;

const app = express();

dotenv.config();

//Connecting mongoDB
connectDB();

//Response data to return json
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use(express.json());
app.use("/api", contactRoutes);
app.use("/api", subscribeRoutes);

app.get("/", (req, res) => {
  res.send("Auto Repair Contact API is running");
});

//Connecting server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
