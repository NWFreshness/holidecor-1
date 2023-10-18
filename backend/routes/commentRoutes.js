const express = require("express");
const router = express.Router({ mergeParams: true });
const { protect } = require("../middleware/authMiddleware");
const {
  createComment,
  editComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/").post(protect, createComment);
router
  .route("/:commentId")
  .put(protect, editComment)
  .delete(protect, deleteComment);

module.exports = router;
