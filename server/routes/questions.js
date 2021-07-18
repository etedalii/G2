let express = require("express");
let router = express.Router();

let questionCtrl = require("../controller/question");

/* Get List -- Read operation */
router.get("/", questionCtrl.displayQuestionList);

/* GET Route for display the Add page - CREATE Operation */
//router.get('/add', questionController.displayAddPage);

/* POST route for proccessing the add page  */
router.post('/add', questionCtrl.processQuestionAdd);

/* POST request for proccessing the edit page  */
router.post('/edit/:id', questionCtrl.processEditPage);

/* Get request - perform delete action */
router.get('/delete/:id', questionCtrl.performDelete);

module.exports = router;