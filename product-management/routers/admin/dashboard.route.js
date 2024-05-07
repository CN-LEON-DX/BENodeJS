const express = require("express");
const router = express.Router();
const controller = require('../../controller/admin/dashboard.controller');

router.get('/', controller.dashboard);

// Export ra các router này cho file khác dùng
module.exports = router;