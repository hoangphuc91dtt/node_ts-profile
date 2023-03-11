const Information = require("../models/informationModel");
const Skill = require("../models/skillModel");
const Education = require("../models/educationModel");
const Experience = require("../models/experienceModel");
async function index(req, res, next) {
    const informations = await Information.find({});
    const skills = await Skill.find({});
    const experiences = await Experience.find({});
    const educations = await Education.find({});
    res.render("index", {
        information: informations,
        skills: skills,
        experience: experiences,
        education: educations,
    });
}

module.exports = { index };
