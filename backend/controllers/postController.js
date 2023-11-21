const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");

const getPosts = asyncHandler(async (req, res) => {
  const posts = Post.findAll({});
  res.status(200).json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { title, text, images } = req.body;

  if (!title || !text) {
    res.status(400);
    throw new Error("Please add a title and content");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const post = await Post.create({
    title,
    text,
    user: req.user.id,
    images,
  });

  res.status(201).json(post);
});

module.exports = { getPosts, createPost };
