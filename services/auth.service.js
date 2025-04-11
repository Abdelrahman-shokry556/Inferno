const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { UnauthenticatedError, BadRequestError, ConflictError } = require("../errors");

class AuthService {
  /**
   * Register a new transmitter
   */
  async registerUser(userData) {
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      throw new BadRequestError("Please provide all the fields");
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { name: username }],
    });

    if (existingUser) {
      if (existingUser.name === username) {
        throw new ConflictError("Username already taken");
      }
      throw new ConflictError("Email already registered");
    }

    const user = await User.create({ name: username, email, password });

    return {
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: user.createJWT(),
    };
  }

  /**
   * Login a transmitter
   */
  async loginUser(email, password) {
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
  }

  /**
   * Update user information
   */
  async updateUserInfo(userId, userData) {
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
  }
}

module.exports = new AuthService();
