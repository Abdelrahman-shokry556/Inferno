const Message = require("../models/Message");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// Get all messages
const getAllMessages = async (req, res) => {
  const messages = await Message.find({}).sort("-createdAt");
  res.status(StatusCodes.OK).json({ messages, count: messages.length });
};

// Get a single message
const getMessage = async (req, res) => {
  const {
    params: { id: messageId },
  } = req;

  const message = await Message.findOne({
    _id: messageId,
  });
  if (!message) {
    throw new NotFoundError(`No message with id ${messageId}`);
  }
  res.status(StatusCodes.OK).json({ message });
};

// Create a new message
const createMessage = async (req, res) => {
  req.body.createdBy = req.user.userId;

  // Validate based on message type
  const { type, content, coordinates, progress } = req.body;

  if (type === "location" && !coordinates) {
    throw new BadRequestError(
      "Please provide coordinates for location message"
    );
  }

  if (
    type === "progress" &&
    (progress === undefined || progress < 0 || progress > 100)
  ) {
    throw new BadRequestError("Please provide valid progress value (0-100)");
  }

  const message = await Message.create(req.body);

  // Broadcast message through WebSocket connection handler
  if (req.app.locals.wss) {
    const broadcastData = JSON.stringify({
      type: message.type,
      content: message.content,
      timestamp: message.createdAt,
      id: message._id,
      coordinates: message.coordinates,
      progress: message.progress,
    });

    req.app.locals.wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(broadcastData);
      }
    });
  }

  res.status(StatusCodes.CREATED).json({ message });
};

// Delete a message
const deleteMessage = async (req, res) => {
  const {
    user: { userId },
    params: { id: messageId },
  } = req;

  const message = await Message.findByIdAndRemove({
    _id: messageId,
    createdBy: userId,
  });
  if (!message) {
    throw new NotFoundError(`No message with id ${messageId}`);
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  createMessage,
  deleteMessage,
  getAllMessages,
  getMessage,
};
