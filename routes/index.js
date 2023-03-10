var express = require("express");
var router = express.Router();

const informationController = require("../controller/informationController");
const educationController = require("../controller/educationController");
const skillController = require("../controller/skillController");
const experienceController = require("../controller/experienceController");
const main = require("../controller/main");
/* GET home page. */
router.get("/", main.index);

module.exports = router;
