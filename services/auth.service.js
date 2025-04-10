const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const CustomAPIError = require("../errors");
const { UnauthenticatedError, BadRequestError } = require("../errors");

/**
 * Register a new transmitter
 */
const registerUser = async (userData) => {
  const { username, email, password } = userData;
  if (!username || !email || !password) {
    throw new BadRequestError("Please provide all the fields");
  }

  // Check if user already exists with this email or username
  const existingUser = await User.findOne({
    $or: [{ email }, { name: username }],
  });

  if (existingUser) {
    if (existingUser.name === username) {
      throw new CustomAPIError.ConflictError("Username already taken");
    }
    throw new CustomAPIError.ConflictError("Email already registered");
  }

  const user = await User.create({
    name: username,
    email: email,
    password: password,
  });

  return {
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: user.createJWT(),
  };
};

/**
 * Login a transmitter
 */
const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  return {
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: user.createJWT(),
  };
};

/**
 * Update user information
 */
const updateUserInfo = async (userId, userData) => {
  const { name, email } = userData;

  if (!name || !email) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new UnauthenticatedError("User not found");
  }

  user.name = name;
  user.email = email;

  await user.save();

  return {
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: user.createJWT(),
  };
};

module.exports = {
  registerUser,
  loginUser,
  updateUserInfo,
};
