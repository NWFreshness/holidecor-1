const express = require("express");
const router = express.Router();
const {
  getHouses,
  getHouse,
  createHouse,
  editHouse,
  deleteHouse,
} = require("../controllers/houseController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getHouses).post(protect, createHouse);
router
  .route("/:id")
  .get(getHouse)
  .put(protect, editHouse)
  .delete(protect, deleteHouse);

module.exports = router;
