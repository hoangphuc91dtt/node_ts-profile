const Skill = require("../models/skillModel");

async function index(req, res, next) {
    const skills = await Skill.find({});

    console.log(skills[0]);

    res.render("index", {
        skills: skills,
    });
}

module.exports = { index };
