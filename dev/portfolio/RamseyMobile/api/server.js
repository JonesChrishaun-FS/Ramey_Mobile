require("dotenv").config();
const express = require("express");
const connectDB = require("./app/db/config");
const cors = require("cors");
const bodyParser = require("body-parser");

//Adding routes

const app = express();

//Connecting mongoDB
connectDB();

//Response data to return json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Adding PORT
const PORT = process.env.PORT;

//Connecting server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
