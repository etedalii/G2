let express = require("express");
let router = express.Router();
const passport = require("passport");

//enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// create a reference to the model
let User = require("../models/user");

module.exports.displayLoginPage = (req, res, next) => {
  //check that if user already login or not
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      email: req.user ? req.user.username : "",
    });
  } else {
    res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    //If get server error
    if (err) {
      return next(err);
    }
    // is there a user login error
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      res.redirect("/login");
    }
    //Now user can login
    req.login(user, (err) => {
      //check is there server error

      if (err) {
        return next(err);
      }

      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email,
      };

      const authToken = jwt.sign(payload, DB.Secret, { expiresIn: "1d" });

      return res.json({
        success: true,
        msg: "User logged in Successfully",
        user: {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email,
        },
        token: authToken,
      });
    });
  })(req, res, next);
};

module.exports.processRegisterPage = (req, res, next) => {
  console.log(req.body);

  let newregister = new User({
    //name: req.body.name,
     lastname: req.body.lastname,
    // username: req.body.username,
    // password: req.body.password,
    // email: req.body.email,
    // userType: req.body.userType,
  });
  console.log("user object create");
  //console.log(newUser);
  return res.json({ success: true, msg: "User Register Successfully" });
  // User.register(newUser, req.body.password, (user) => {
  //   if (err) {
  //     // console.log("Error, Inserting a new User");
  //     // if (err.name === "UserExistsError") {
  //     //   req.flash("registerMessage", "Register Error, User Already exist");
  //     // }
  //     // return res.render("auth/register", {
  //     //   title: "register",
  //     //   messages: req.flash("registerMessage"),
  //     //   email: req.user ? req.user.email : "",
  //     // });
  //     return next(err);
  //   } else {
  //     return res.json({ success: true, msg: "User Register Successfully" });
  //   }
  // });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  //res.redirect("/");

  res.json({ success: true, msg: "User Successfully Logged out" });
};
