//Requirement;
const User = require('../Schema/User_Model');
const express = require('express');
const Path = express.Router()

//Postman Checking purpose;
Path.get('/', (req, res) => {
    res.send('<h1>Its Working..!</h1>')
})

//Get all user detail from database;
Path.get('/User_data',async(req, res) => {
    try {
        let Data = await User.find()
        res.status(200).json({User:Data})
    } catch (error) {
        res.status(500).json(error)
    }
})


//This model Import;
module.exports = Path;