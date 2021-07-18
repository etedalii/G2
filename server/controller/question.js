let express = require("express");
let router = express.Router();

let Question = require("../models/question");
 let Survey = require("../models/survey");
 let Category = Survey.Category;
 let Options = Survey.Options;

module.exports.displayQuestionList = (req, res, next) => {
  Question.find((err, questionList) => {
    if (err) {
      return console.error(err);
    } else {
      return res.json(questionList);
    }
  });
};


module.exports.displayAddPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully display add page" });
};

module.exports.processQuestionAdd = (req, res, next) => {
  //Serialize the cart data
  // let category = new Category();

  //Serialize the line data
  // for (let line of req.body.category.lines) {
  //   let option = new Options(
  //     line.option._id,
  //     line.option.name
  //   );

  //   category.lines.push({option});
  // }

  // category.questionCount = req.body.category.questionCount;
  // category.questionOrder = req.body.category.questionOrder;
  console.log('here')

  //Create a new question survey
  let newQuestion = Question({
    title: req.body.title,
    qestionType: req.body.qestionType,
    userCreator: req.body.userCreator,
    publish: req.body.publish,
    status: req.body.status,
   
  });
// category: category,

  //Add new order object to the database
  Question.create(newQuestion, (err, question) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Added a New Question!" + question});
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
 let id = req.params.id;

  //let category = new Category();

  //Serialize the line data
  // for (let line of req.body.category.lines) {
  //   let option = new Options(
  //     line.option._id,
  //     line.option.name
  //   );

  //   category.lines.push({option});
  // }

  // category.questionCount = req.body.category.questionCount;
  // category.questionOrder = req.body.category.questionOrder;

  //Create a new question survey
  let updateQuestion = Question({
    title: req.body.title,
    qestionType: req.body.qestionType,
    userCreator: req.body.userCreator,
    publish: req.body.publish,
    status: req.body.status,
  });
  //category: category,

  //update order object to the database
  Question.updateOne({ _id: id }, updateQuestion, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited Question!",
        question: updateQuestion,
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  Question.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Deleted question!" });
    }
  });
};
