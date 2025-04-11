const { StatusCodes } = require("http-status-codes");
const broadcastService = require("../services/broadcast.service");

const createBroadcast = async (req, res) => {
  const { userId } = req.user;
  const result = await broadcastService.createBroadcast(req.body, userId);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "A broadcast has been created successfully.",
    data: result,
  });
};
const getAllBroadcasts = async (req, res) => {
  const result = await broadcastService.getAllBroadcasts();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "All the broadcasts.",
    data: result,
  });
};
module.exports = {
  createBroadcast,
  getAllBroadcasts,
};
