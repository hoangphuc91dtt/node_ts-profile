const Education = require("../models/educationModel");

async function index(req, res, next) {
    const educations = await Education.find({});

    console.log(educations);

    res.render("index", {
        educations,
    });
}

module.exports = { index };
