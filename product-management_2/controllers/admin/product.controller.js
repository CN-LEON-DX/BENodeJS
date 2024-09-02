const Product = require("../../models/product.model");
const filterProductHelper = require("../../helpers/filterProduct.helper");

module.exports.index = async (req, res) => {
  let query = filterProductHelper(req);
  const { priceRange, status, search } = req.query;

  const pagination = {
    limitItems: 5,
    currentPage: parseInt(req.query.page) || 1,
  };

  const totalProducts = await Product.countDocuments(query);

  const totalPages = Math.ceil(totalProducts / pagination.limitItems);

  if (pagination.currentPage > totalPages) {
    pagination.currentPage = totalPages;
  } else if (pagination.currentPage < 1) {
    pagination.currentPage = 1;
  }

  const products = await Product.find(query)
    .limit(pagination.limitItems)
    .skip((pagination.currentPage - 1) * pagination.limitItems);

  pagination.pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  pagination.totalPages = totalPages;

  res.render("admin/pages/products/index", {
    pageTitle: "List product",
    products: products,
    priceRange,
    status,
    search,
    pagination: pagination,
  });
};
