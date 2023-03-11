const Experience = require("../models/experienceModel");

async function index(req, res, next) {
    const experiences = await Experience.find({});


    res.render("index", {
        experiences,
    });
}

module.exports = { index };
