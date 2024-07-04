import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        maxLength: 60
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 30
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePicture: {
        type: String,
        default: ""
    }
}, {timestamps: true})

const User = mongoose.model("Users",  userSchema); //this is how we creating an User model.

export default User;