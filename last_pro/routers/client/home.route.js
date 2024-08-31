const express = require("express");
const router = express.Router();
const controller = require('../../controller/client/home.controller');

router.get('/', controller.index);

// Export ra các router này cho file khác dùng
module.exports = router;