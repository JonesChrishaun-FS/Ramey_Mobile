const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    mongoose.connect(MONGODB_URI);
    const db = await mongoose.connection;
    db.once("open", () => console.log("Database Connection Established"));
  } catch {
    db.on("error", (error) => console.error(error));
  }
};

module.exports = connectDB;
