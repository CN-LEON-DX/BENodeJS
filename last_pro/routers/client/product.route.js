const express = require("express");
const router = express.Router();
const controller = require("../../controller/client/product.controller");


router.get('/', controller.index);
// router.get('/edit', controller.edit);
// router.get('/create', controller.create);
// Nhiều router khác của product
// ./edit/
// /create/
// /delete/

// Export ra các router này cho file khác dùng
module.exports = router;