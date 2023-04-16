//Require
const mongoose = require('mongoose');

//Define Schema model;
const Users = new mongoose.Schema({
    Name: {
        type: String,
        collection: String
    },
    Position: {
        type: String,
    },
    Office: {
        type: String,
    },
    Age: {
        type: Number,
    },
    Start_date: {
        type: String,
    },
    Salary: {
        type: Number,
    }

}, { timestamps: true })

module.exports = mongoose.model('User', Users, "User_Data");

