<<<<<<< HEAD
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js"; // Adjust the path if needed

dotenv.config();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

// Signup and login
=======
const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

//Signup and login
>>>>>>> ec9ff6ddb505e710ea1f18e40a02ebd8f2e67b17
app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
<<<<<<< HEAD
=======

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
>>>>>>> ec9ff6ddb505e710ea1f18e40a02ebd8f2e67b17
