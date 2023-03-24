const express = require("express");
const router = express.Router();
const multer = require("multer");
const { protect } = require("../middleware/authMiddleware");
const {
  addProductToCart,
  getCartProducts,
  deleteCartProduct,
} = require("../controllers/cartController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/").get(protect, getCartProducts).post(protect, addProductToCart);

router.route("/:id").delete(protect, deleteCartProduct);

module.exports = router;
