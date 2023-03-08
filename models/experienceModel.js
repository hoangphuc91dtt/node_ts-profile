const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExperienceSchema = new Schema({
    time_year: { type: String },
    name_experience: { type: String },
    title_experience: { type: String },
});

var ExperienceModel = mongoose.model("experience", ExperienceSchema);

module.exports = ExperienceModel;
