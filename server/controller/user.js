let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the model
let User = require("../models/user");

module.exports.displayUserList = (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json(userList);
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully display add page" });
};

module.exports.processAddPage = (req, res, next) => {
  let newUser = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      userType: req.body.userType,
  });
  
  //TODO *************
  // I should change create with register when add passport and authentication
  User.create(newUser,(err, user) => {
    if (err) {
      if (err.name === "UserExistsError") {
        req.flash("registerMessage", "Register Error, This User already exist");
      }
    } else {
      return res.json({ success: true, msg: "User Register Successfully" });
    }
  });
};

//This module is responsible for process edit, when call edit with post
module.exports.processEditUser = (req, res, next) => {
  let id = req.params.id;
  let editUser = User({
    _id: id,
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    userType: req.body.userType,
  });

  User.updateOne({ _id: id }, editUser, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
     res.json({success: true, msg: 'Successfuly Edited User', user: editUser});
    }
  });
};

//this module is responsible for delete a user from Db
module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  User.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.json({success: true, msg: 'Successfuly Deletedd user'});
    }
  });
};