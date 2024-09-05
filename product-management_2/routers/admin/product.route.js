const express = require("express");
const router = express.Router();

const multer = require("multer");
const stoprage = require("../../helpers/storage-multer.helper");
const upload = multer({storage: stoprage()});

const controller = require("../../controllers/admin/product.controller");

// console.log("product route");

router.get("/", controller.index);
router.patch("/edit/:id/:title/:price/:status", controller.edit);
router.delete("/delete/:id", controller.delete);
router.delete("/delete-multiple", controller.deleteMultiple);
router.patch("/change-position/", controller.changePosition);
router.get("/create", controller.create);
router.post("/create", upload.single("thumbnail"), controller.createProduct); // field name in form

module.exports = router;
