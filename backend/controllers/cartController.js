const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Cart = require("../models/cartModel");

// @desc Add product to cart
// @route POST /api/cart
// @access Private
const addProductToCart = asyncHandler(async (req, res) => {
  const { name, size, type, price } = req.body;

  if (!name || !size || !type || !price) {
    res.status(400);
    throw new Error("Please include all the fields");
  }

  // Get user using the id and the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // const fileRes = await cloudinary.uploader.upload(
  //   req.files.imgFile.tempFilePath,
  //   { folder: "pizzaAppCart" }
  // );
  // console.log(fileRes);

  const product = await Cart.create({
    name,
    size,
    type,
    price,
    user: req.user.id,
  });

  res.status(201).json(product);
});

// @desc Get user products
// @route GET /api/cart
// @access Private
const getCartProducts = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const products = await Cart.find({ user: req.user.id });

  res.status(200).json(products);
});

// @desc Delete product
// @route DELETE /api/cart/:id
// @access Private
const deleteCartProduct = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const product = await Cart.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await product.remove();

  res.status(200).json({ success: true });
});

module.exports = {
  addProductToCart,
  getCartProducts,
  deleteCartProduct,
};
