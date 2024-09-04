const Product = require("../../models/product.model");
const filterProductHelper = require("../../helpers/filterProduct.helper");
const systemConfig = require("../../config/system");
const mongoose = require("mongoose");

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
    prefixAdmin: systemConfig.prefixAdmin,
  });
};

module.exports.edit = async (req, res) => {
  const { id, title, price, status } = req.params;
  try {
    await Product.findByIdAndUpdate(id, {
      title: title,
      price: price,
      status: status,
    });
    res.redirect("back");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      await Product.updateOne(
        { _id: id },
        { deleted: true, deletedAt: new Date() }
      );
      res.redirect("back");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send("Error deleting product");
  }
};

module.exports.deleteMultiple = async (req, res) => {
  try {
    const ids = JSON.parse(req.body.ids);

    const formattedIds = ids.map(
      (id) => new mongoose.Types.ObjectId(id.trim())
    );

    await Product.updateMany(
      { _id: { $in: formattedIds } },
      { $set: { deleted: true, deletedAt: new Date() } }
    );

    res.redirect("back");
  } catch (error) {
    console.error("Error processing product IDs:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.changePosition = async (req, res) => {
  try {
    const products = JSON.parse(req.body.products);

    for (const product of products) {
      const { id, position } = product;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`Invalid product ID: ${id}`);
      }

      const positionAsInt = parseInt(position, 10);

      await Product.updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { position: positionAsInt } }
      );
    }

    res.redirect("back");
  } catch (error) {
    console.error("Error processing product positions:", error);
    res.status(500).send("Internal Server Error");
  }
};
