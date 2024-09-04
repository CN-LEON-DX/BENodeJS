const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");

console.log("product route");
router.get("/", controller.index);
router.patch("/edit/:id/:title/:price/:status", controller.edit);
router.delete("/delete/:id", controller.delete);
router.delete("/delete-multiple", controller.deleteMultiple);
router.patch("/change-position/", controller.changePosition);

module.exports = router;
