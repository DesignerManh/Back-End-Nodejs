const express = require("express");
const router = express.Router(); // Tạo biến router
const productController = require("../../controller/client/product.controller");
router.get("/" , productController.index);

module.exports = router;
