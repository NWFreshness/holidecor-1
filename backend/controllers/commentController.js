const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const House = require("../models/houseModel");
const Comment = require("../models/commentModel");

//create comment on house
const createComment = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const house = await House.findById(req.params.houseId);
  console.log(req.params.houseId);
  const { text } = req.body;

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (!house) {
    res.status(401);
    throw new Error(req.params.houseId);
  }

  const comment = await Comment.create({
    text,
    user: req.user.id,
    house: req.params.houseId,
  });
  await comment.save();
  house.comments.push(comment._id);
  user.comments.push(comment._id);
  await user.save();
  await house.save();

  res.status(201).json(comment);
});

//edit comment on house
const editComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);

  if (!comment) {
    res.status(404);
    throw new Error("Comment not found");
  }

  comment.text = req.body.text || comment.text;
  await comment.save();

  res.status(200).json(comment);
});

//delete comment on house
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findOneAndDelete(req.params.commentId);

  if (!comment) {
    res.status(404);
    throw new Error("Comment not found");
  }

  res.status(200).json({ message: "Comment removed" });
});

module.exports = { createComment, editComment, deleteComment };
