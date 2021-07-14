var express = require('express');
var router = express.Router();

const userController = require('../controller/user')

/* GET Route for the User List page - READ Operation */
router.get('/', userController.displayUserList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', userController.displayAddPage)

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', userController.processAddPage)


module.exports = router;