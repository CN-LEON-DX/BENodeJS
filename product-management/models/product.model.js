// Get model in DB for products
const mongoose = require("mongoose");
const productShema = new mongoose.Schema({
    //.... field you need
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
});
// Befor get an model we need to have a Schema and name of table 
const Product = mongoose.model('Product', productShema, "products");

module.exports = Product;