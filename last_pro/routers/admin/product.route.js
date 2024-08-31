const express = require("express");
const router = express.Router();
const controller = require('../../controller/admin/product.controller');

router.get('/', controller.product);

// Export ra các router này cho file khác dùng
module.exports = router;