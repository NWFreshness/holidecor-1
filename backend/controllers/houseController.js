const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const House = require("../models/houseModel");
const Comment = require("../models/commentModel");

// @desc Get user houses
// @route GET /api/tickets
// @access Private
const getUserHouses = asyncHandler(async (req, res) => {
  //get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const houses = await House.find({ user: req.user.id });

  res.status(200).json(houses);
});
const getHouses = asyncHandler(async (req, res) => {
  const houses = await House.find({});
  res.status(200).json(houses);
});

const getHouse = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(401);
    throw new Error("House does not exist");
  }
  const house = await House.findById(req.params.id).populate("comments");

  res.status(200).json(house);
});

// @desc Edit a house
// @route PUT /api/houses/:id
// @access Private
const editHouse = asyncHandler(async (req, res) => {
  const { name, street, city, state, zip, images } = req.body;
  const address = { street, city, state, zip };

  const updatedHouse = await House.findOneAndUpdate(
    { _id: req.params.id },
    { name, address, images },
    { new: true }
  );

  if (!updatedHouse) {
    res.status(404);
    throw new Error("House not found");
  }

  res.status(200).json(updatedHouse);
});

// @desc Delete a house
// @route DELETE /api/houses/:id
// @access Private
const deleteHouse = asyncHandler(async (req, res) => {
  const house = await House.findOneAndDelete(req.params.id);

  if (!house) {
    res.status(404);
    throw new Error("House not found");
  }

  res.status(200).json({ message: "House removed" });
});

// @desc create new house
// @route POST /api/tickets
// @access Private
const createHouse = asyncHandler(async (req, res) => {
  const { name, street, city, state, zip, images } = req.body;
  const address = { street, city, state, zip };
  if (!name) {
    res.status(400);
    throw new Error("Please add a name and address");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const house = await House.create({
    name,
    address,
    user: req.user.id,
    images,
  });

  res.status(201).json(house);
});

module.exports = { getHouses, getHouse, createHouse, editHouse, deleteHouse };
