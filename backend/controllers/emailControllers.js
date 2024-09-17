<<<<<<< HEAD
import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
=======
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
>>>>>>> ec9ff6ddb505e710ea1f18e40a02ebd8f2e67b17
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
<<<<<<< HEAD
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = expressAsyncHandler(async (req, res) => {
  try {
    const { fullName, phone, email, message } = req.body;
    console.log(fullName, phone, email, message);
    const subject = `Message from ${fullName} (${phone})`; // Include full name in subject
    if (!email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject, // Use the constructed subject
      text: `Message from ${fullName}:\n\n${message}\n\nPhone: ${phone}`, // Include full name and phone in message body
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});


=======
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;
  console.log(email, subject, message);

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
>>>>>>> ec9ff6ddb505e710ea1f18e40a02ebd8f2e67b17
