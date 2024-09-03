const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
  deletedAt: Date
});

const Product = mongoose.model("Products", productSchema, "products"); // Name model in 3st para

module.exports = Product;
