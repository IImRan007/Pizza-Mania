const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add product name"],
    },
    description: {
      type: String,
      required: [true, "Please add product description"],
    },
    type: {
      type: String,
      required: [true, "Please add product type"],
    },
    price: {
      type: Number,
      required: [true, "Please add price of the product"],
    },
    imgFile: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
