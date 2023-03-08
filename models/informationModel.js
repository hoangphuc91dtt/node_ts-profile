const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var InformationSchema = new Schema({
    name: {
        type: String,
    },
    job: {
        type: String,
    },
    avt: {
        type: String,
    },
    address: {
        type: String,
    },
    web_link: {
        type: String,
    },
    phone: {
        type: String,
    },
});

var InformationModel = mongoose.model("Information", InformationSchema);

module.exports = InformationModel;
