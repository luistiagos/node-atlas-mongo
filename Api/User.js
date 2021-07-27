const express = require('express');
const User = require('../DB/User');
const route = express.Router();


route.post('/', (req, res) => {
    console.log('body', req.body);
    const{firstName, lastName} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    userModel.save().then(() => {
        res.json(userModel);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});

module.exports = route;