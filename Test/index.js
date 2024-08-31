const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/product_management");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

const Product = mongoose.model("Products", {
  title: String,
  price: Number,
  thumbnail: String,
  description: String,
});

app.get(`/`, (req, res) => {
  res.render("index", {
    title: "Index",
    message: "Hello VietNam",
  });
});

app.get(`/products`, async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("product", {
    title: "Products",
    message: "List product",
    products: products,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
