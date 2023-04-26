const mongoose = require("mongoose");

// User
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    notes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    }]
})

const User = mongoose.model("User", userSchema);

// Note
const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String
    },
    skin: {
        type: String,
    },
    listImage: [{
        type: String,
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
})


const Note = mongoose.model("Note", noteSchema);

module.exports = {Note, User};