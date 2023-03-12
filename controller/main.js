let Education = require("../models/educationModel");
let Experience = require("../models/experienceModel");
let Information = require("../models/informationModel");
let Skill = require("../models/skillModel");

async function index(req, res) {
    let skills = await Skill.find();
    let educations = await Education.find();
    let informations = await Information.find();
    console.log(informations);
    let experiences = await Experience.find();
    console.log(skills);
    res.render("index", {
        title: "MyCv",
        skills: skills,
        educations: educations,
        informations: informations,
        experiences: experiences,
    });
}
module.exports = {
    index,
};
