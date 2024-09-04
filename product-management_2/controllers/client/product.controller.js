// [GET] /products

const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  }).sort({ position: 1 });

  const newProduct = products.map((product) => {
    product.newPrice = (
      product.price *
      (1.0 - product.discountPercentage / 100)
    ).toFixed(2);

    return product;
  });

  res.render("client/pages/products/index", {
    pageTitle: "List product 123",
    products: newProduct,
  });
};
