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

  User.register(newUser, req.body.password, (user) => {
    if (err) {
      if (err.name === "UserExistsError") {
        req.flash("registerMessage", "Register Error, This User already exist");
      }
    } else {
      return res.json({ success: true, msg: "User Register Successfully" });
    }
  });
};
