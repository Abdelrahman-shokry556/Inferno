const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["text", "query", "location", "progress"],
      required: [true, "Please provide message type"],
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Please provide message content"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide transmitter"],
    },
    // For location type, store coordinates
    coordinates: {
      type: {
        lat: Number,
        lng: Number,
      },
      required: function () {
        return this.type === "location";
      },
    },
    // For progress type, store progress value
    progress: {
      type: Number,
      min: 0,
      max: 100,
      required: function () {
        return this.type === "progress";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
