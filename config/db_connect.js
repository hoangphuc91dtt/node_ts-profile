const mongoose = require("mongoose");
async function db() {
    try {
        await mongoose.connect(
            "mongodb+srv://hoangphuc91dtt:phuchoang112233@cluster0.y5elmgl.mongodb.net/demo_cv"
        );
        console.log("DB Connect");
    } catch (error) {
        console.log("DB not Connect");
    }
}

module.exports = { db };
