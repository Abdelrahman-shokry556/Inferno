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

const getUnjoinedBroadcasts = async (req, res) => {
  const { userId } = req.user;
  const allBroadcasts = await broadcastService.getAllBroadcasts();

  // Assuming each broadcast has a 'participants' field that contains user IDs of joined users
  const unjoinedBroadcasts = allBroadcasts.filter(broadcast => 
    !broadcast.agents || !broadcast.agents.includes(userId)
  );

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Broadcasts that you have not joined.",
    data: unjoinedBroadcasts,
  });
};

module.exports = {
  createBroadcast,
  getAllBroadcasts,
	getUnjoinedBroadcasts,
};
