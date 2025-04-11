const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Broadcast = require("../models/Broadcast");
const { UnauthenticatedError, BadRequestError } = require("../errors");

class BroadcastService {
  async createBroadcast(data, userId) {
    const { name, description } = data;
    const createdBy = userId;

    console.log(
      `Name: ${name}, \nDescription: ${description}\nCreatedBy: ${createdBy}`
    );

    if (!name || !description || !createdBy) {
      throw new BadRequestError(
        "Please provide all required fields: name, description"
      );
    }

    const broadcast = await Broadcast.create({
      name,
      description,
      createdBy,
    });

    if (!broadcast) {
      throw new BadRequestError("Error while creating the broadcast");
    }

    console.log(`broadcast: ${broadcast}`);

    return {
      id: broadcast._id,
      name: broadcast.name,
      description: broadcast.description,
      createdBy: broadcast.createdBy,
      createdAt: broadcast.createdAt,
    };
  }

  async getAllBroadcasts() {
    const broadcasts = await Broadcast.find({});
    // return broadcasts.map((broadcast) => ({
    //   id: broadcast._id,
    //   name: broadcast.name,
    //   description: broadcast.description,
    //   createdBy: broadcast.createdBy,
    //   createdAt: broadcast.createdAt,
    // }));
    return broadcasts;
  }

  async getBroadcastById(id) {
    if (!id) {
      throw new BadRequestError("Please provide a broadcast ID");
    }

    const broadcast = await Broadcast.findById(id);
    if (!broadcast) {
      throw new UnauthenticatedError("Broadcast not found");
    }

    return {
      id: broadcast._id,
      name: broadcast.name,
      description: broadcast.description,
      createdBy: broadcast.createdBy,
      createdAt: broadcast.createdAt,
    };
  }
}

module.exports = new BroadcastService();
