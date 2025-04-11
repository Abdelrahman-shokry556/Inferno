const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const { createBroadcast } = require("../controllers/Broadcast.controller"); // Fixed casing issue

router.post("/", auth, createBroadcast);

module.exports = router;
