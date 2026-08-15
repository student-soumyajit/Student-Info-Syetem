
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be unique"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    role:{
        type:String,
        enum : ['user','admin'],
        default:'user'
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel
