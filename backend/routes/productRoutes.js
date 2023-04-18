const express = require("express");
const router = express.Router();
const multer = require("multer");
const { protect } = require("../middleware/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/").post(protect, createProduct).get(protect, getProducts);

// router
//   .route("/")
//   .post(protect, upload.single("imgFile"), createProduct)
//   .get(protect, getProducts);

router.get("/all", getAllProducts);

router
  .route("/:id")
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

module.exports = router;
