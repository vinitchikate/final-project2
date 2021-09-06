const mongoose = require('mongoose')
let userModel= require("../models/userModel.js")

let getUsers= async function (req, res) {
    allUsers = await userModel.find()  
    res.send({ "allUserDetails": allUsers })
}

let createNewUser =  async function (req, res) {
    try{
        let newUser= {}
        if (req.body.firstName) newUser.firstName = req.body.firstName;
        if (req.body.lastName) newUser.lastName = req.body.lastName;
        if (req.body.mobile) newUser.mobile = req.body.mobile;
        if (req.body.email) newUser.email = req.body.email;
        if (req.body.gender) newUser.gender = req.body.gender;

        let userCreated= await userModel.create(newUser)
        res.send({ "new user created": userCreated })
    }
    catch(err)
    {
        console.log("Error in creating new user ", err);
        res.send({  "error: ": err });
    }

}

module.exports.getUsers= getUsers
module.exports.createNewUser= createNewUser