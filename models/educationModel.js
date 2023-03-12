const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EducationSchema = new Schema({
    title: { type: String },
    level: { type: String },
    date: { type: String },
    description: { type: String },
    time_year: { type: String },
    name_Education: { type: String },
    title_Education: { type: String },
});

var EducationModel = mongoose.model("education", EducationSchema);

module.exports = EducationModel;
