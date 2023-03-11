const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    name: {
        type: String,
    },
    percent: {
        type: String,
    },
});

var SkillModel = mongoose.model("Skill", SkillSchema);

module.exports = SkillModel;
