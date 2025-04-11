const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const {
  createBroadcast,
  getAllBroadcasts,
} = require("../controllers/Broadcast.controller"); // Fixed casing issue

router.post("/", auth, createBroadcast);
router.get("/", auth, getAllBroadcasts);

module.exports = router;
