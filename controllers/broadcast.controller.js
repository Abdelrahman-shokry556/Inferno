const { StatusCodes } = require("http-status-codes");
const broadcastService = require("../services/broadcast.service");

const createBroadcast = async (req, res) => {
  const { userId } = req.user;
  console.log(userId);
  const result = await broadcastService.createBroadcast(req.body, userId);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "A broadcast has been created successfully.",
    data: result,
  });
};

module.exports = {
  createBroadcast,
};
