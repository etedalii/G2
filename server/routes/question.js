let express = require("express");
let router = express.Router();

let questionController = require("../controller/question");

/* Get List -- Read operation */
router.get("/", questionController.displayQuestionList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', questionController.displayAddPage)

/* POST route for proccessing the add page  */
router.post('/add', questionController.processAddPage)

/* POST request for proccessing the edit page  */
router.post('/edit/:id', questionController.processEditPage);

/* Get request - perform delete action */
router.get('/delete/:id', questionController.performDelete);

module.exports = router;