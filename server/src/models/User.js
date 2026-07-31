import mongoose from "mongoose";

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

const User = mongoose.model("User", userSchema);

export default User;