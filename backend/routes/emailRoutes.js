<<<<<<< HEAD
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
=======
const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/emailControllers");

router.post("/sendEmail", sendEmail);

module.exports = router;
>>>>>>> ec9ff6ddb505e710ea1f18e40a02ebd8f2e67b17
