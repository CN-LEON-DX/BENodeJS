const mongoose = require("mongoose");
var slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
  {
    title: String, // Product1
    description: String,
    price: Number,
    discountPercentage: {
      type:Number,
      default: 0
    },
    stock: {
      type:Number,
      default: 0
    },
    thumbnail: String,
    status: {
      type:String,
       default: "active"
    },
    position: Number,
    slug: {
      type: String,
      slug: "title", //=> convert to product1
      unique: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products", productSchema, "products"); // Name model in 3st para

module.exports = Product;
