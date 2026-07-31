import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    description: String,
});

module.exports = achievementSchema;