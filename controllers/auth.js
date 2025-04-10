const { StatusCodes } = require("http-status-codes");
const authService = require("../services/auth.service");

const register = async (req, res) => {
  const result = await authService.registerUser(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "User account created successfully.",
    data: result,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.loginUser(email, password);
  res.status(StatusCodes.OK).json(result);
};

const updateUser = async (req, res) => {
  const result = await authService.updateUserInfo(req.user.userId, req.body);
  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  register,
  login,
  updateUser,
};
