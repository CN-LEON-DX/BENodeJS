const Product = require("../../models/product.model");

// [GET] /products/
module.exports.index = async (req, res) => {
    // Get data for product
    const products = await Product.find({
        status: "active"
    });
    

    // Return a new price with discount of each item
    products.forEach(item => {
        item.newPrice = (item.price*(100 - item.discountPercentage)/100).toFixed(1);
    });
    
    res.render("client/pages/products/index", {
        pageTitle: "Sản phẩm",
        products: products  
    });
}