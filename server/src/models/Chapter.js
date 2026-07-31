import mongoose from "mongoose";
// const achievementSchema = require("./Achivement");

const chapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    // achievements:[achievementSchema]
},{timestamps: true});

const Chapter = mongoose.model("Chapter", chapterSchema);
export default Chapter;