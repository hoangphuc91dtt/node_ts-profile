const Information = require("../models/informationModel");

async function index(req, res, next) {
    const informations = await Information.find({});

    console.log(informations);

    res.render("index", { informations: informations });
}

module.exports = { index };
