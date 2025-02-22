const express = require("express");
const router = express.Router();

const multer = require("multer");
const stoprage = require("../../helpers/storage-multer.helper");
const upload = multer({ storage: stoprage() });

const controller = require("../../controllers/admin/product.controller");

// validate middleware
const validate = require("../../validates/admin/product.validate");

// console.log("product route");

router.get("/", controller.index);
router.patch("/edit/:id/:title/:price/:status", controller.editFast);
router.delete("/delete/:id", controller.delete);
router.delete("/delete-multiple", controller.deleteMultiple);
router.patch("/change-position/", controller.changePosition);
router.get("/create", controller.create);
router.post(
  "/create",
  upload.single("thumbnail"),
  validate.createProduct, // validate before create
  controller.createProduct
);
router.get("/edit/:id", controller.fastEditProduct);
router.patch(
  "/edit/:id",
  upload.single("thumbnail"),
  validate.createProduct, // validate before update
  controller.updateProduct
);

router.get("/detail/:id", controller.detailProduct);

module.exports = router;
