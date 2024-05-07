// [GET] /admin/products
const Product = require("../../models/product.model");
// Get function by helpers
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");


module.exports.product = async (req, res) => {
    
    // console.log(listProduct);
    
    //filters Status
    const filterStatus = filterStatusHelper(req.query);

    let find = {
        deleted: false

    };
    // console.log(req.query.status); // Get status with ?param eg: http://localhost:3000/admin/products?status=active
    // find product with status
    if (req.query.status){
        find.status = req.query.status;
    }
    
    // find product with keyword
    

    const searchObj = searchHelper(req.query);
    if (searchObj.keyword) find.title = searchObj.regex;


    // List product with price, discountPercentage, stock, state
    const listProduct = await Product.find(find);
    res.render("admin/pages/product/index", {
        pageTitle: "Quản lý sản phẩm",
        products: listProduct,
        filters: filterStatus,
        keyword: searchObj.keyword
    });
}