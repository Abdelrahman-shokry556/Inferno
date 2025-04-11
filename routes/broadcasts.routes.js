const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const {
  createBroadcast,
  getAllBroadcasts,
  getUnjoinedBroadcasts,
} = require("../controllers/Broadcast.controller");

router.post("/", auth, createBroadcast);
router.get("/", auth, getAllBroadcasts);
router.get("/unjoined", auth, getUnjoinedBroadcasts);

module.exports = router;
