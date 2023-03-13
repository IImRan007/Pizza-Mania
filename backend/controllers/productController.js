const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Product = require("../models/productModel");

// @desc Create a new product
// @route POST /api/products
// @access Private
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, type, price, imgFile } = req.body;

  if (!name || !description || !type || !price) {
    res.status(400);
    throw new Error("Please include all the fields");
  }

  // Get user using the id and the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const product = await Product.create({
    name,
    description,
    type,
    price,
    imgFile: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
    user: req.user.id,
  });

  res.status(201).json(product);
});

// @desc Get user products
// @route GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const products = await Product.find({ user: req.user.id });

  res.status(200).json(products);
});

// @desc Get all products
// @route GET /api/products/all
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const data = await Product.find({});

  res.status(200).json(data);
});

// @desc Get user single product
// @route GET /api/products/:id
// @access Private
const getProduct = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  // const user = await User.findById(req.user.id);

  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // if (product.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("Not authorized");
  // }

  res.status(200).json(product);
});
// const getProduct = asyncHandler(async (req, res) => {
//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     res.status(404);
//     throw new Error("Product not found");
//   }

//   if (product.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }

//   res.status(200).json(product);
// });

// @desc Update product
// @route PUT /api/products/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const product = await Product.findById(req.params.id);

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
  createProduct,
  getProducts,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
