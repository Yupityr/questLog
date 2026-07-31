const mongoose = require("mongoose");
// const achievementSchema = require("./Achivement");

const chapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    // achievements:[achievementSchema]
},{timestamps: true});

module.exports = mongoose.model("Chapter", chapterSchema);