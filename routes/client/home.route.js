const express = require("express");
const router = express.Router(); // Tạo biến router
const controller = require("../../controller/client/home.controller");

router.get("/",controller.index);

module.exports = router;
