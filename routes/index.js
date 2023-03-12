var express = require("express");
var router = express.Router();

const informationController = require("../controller/main");
/* GET home page. */
router.get("/", informationController.index);

module.exports = router;
