const mongoose = require('mongoose');

const {model , Schema} = mongoose;

const userSchema = new Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    gender:String
})

const userModel = model("user", userSchema);

module.exports = userModel