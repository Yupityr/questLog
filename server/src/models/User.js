const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength:6,
        maxlength:16,
        trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 16,
      trim: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true
    }
},{timestamps: true});

module.exports = mongoose.model("User", userSchema);