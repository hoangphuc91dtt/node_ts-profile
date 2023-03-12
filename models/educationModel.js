const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EducationSchema = new Schema({
    title: { type: String },
    level: { type: String },
    date: { type: String },
    description: { type: String },
});

var EducationModel = mongoose.model("education", EducationSchema);

module.exports = EducationModel;
