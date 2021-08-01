var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");
let passport = require("passport");

const userController = require('../controller/user')

//helper function for the guard perpuses
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}


/* GET Route for the User List page - READ Operation */
router.get('/', userController.displayUserList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', userController.displayAddPage)

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', userController.processAddPage)

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", passport.authenticate('jwt', {session: false}), userController.processEditUser);

// GET to perform  Deletion - DELETE Operation
router.get("/delete/:id", passport.authenticate('jwt', {session: false}), userController.performDelete);

module.exports = router;