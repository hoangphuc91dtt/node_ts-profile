var express = require("express");
var router = express.Router();

const informationController = require("../controller/informationController");
const educationController = require("../controller/educationController");
const skillController = require("../controller/skillController");
const experienceController = require("../controller/experienceController");
/* GET home page. */
router.get("/", informationController.index);
router.get("/", educationController.index);
router.get("/", experienceController.index);
router.get("/", skillController.index);
module.exports = router;
