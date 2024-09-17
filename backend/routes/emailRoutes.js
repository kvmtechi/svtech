// const express = require("express");
// const router = express.Router();

// const { sendEmail } = require("../controllers/emailControllers");

// router.post("/sendEmail", sendEmail);

// module.exports = router;

import { Router } from "express";
import { sendEmail } from "../controllers/emailControllers.js";

const router = Router();

router.post("/send", sendEmail);

export default router;
