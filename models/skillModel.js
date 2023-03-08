const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    desc: {
        type: String,
    },
    songId: {
        type: String,
        default: null,
    },
});

var SkillModel = mongoose.model("kill", SkillSchema);

module.exports = SkillModel;
