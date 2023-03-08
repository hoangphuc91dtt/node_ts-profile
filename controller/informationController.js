const Information = require("../models/informationModel");

async function index(req, res, next) {
    const informations = await Information.find({});

    console.log(informations[0]);

    res.render("index", {
        information: informations[0],
    });
}

module.exports = { index };
