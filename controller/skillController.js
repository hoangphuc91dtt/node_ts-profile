const Skill = require("../models/skillModel");

async function index(req, res, next) {
    const skills = await Skill.find({});

    console.log(skills);

    res.render("index", {
        skills,
    });
}

module.exports = { index };
