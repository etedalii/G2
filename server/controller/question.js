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
  let category = new Category();
  var option = new Options(req.body.q1);
  category.lines.push({ option });
  var option = new Options(req.body.q2);
  category.lines.push({ option });
  var option = new Options(req.body.q3);
  category.lines.push({ option });
  var option = new Options(req.body.q4);
  category.lines.push({ option });

  category.questionCount = 4;
  category.questionOrder = 1;

  //Create a new question survey
  let newQuestion = Question({
    title: req.body.title,
    questionType: req.body.questionType,
    userCreator: req.body.userCreator,
    publish: req.body.publish,
    status: req.body.status,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    category: category,
  });
  // category: category,

  //Add new order object to the database
  Question.create(newQuestion, (err, question) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Added a New Question!" + question,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let category = new Category();
  var option = new Options(req.body.q1);
  category.lines.push({ option });
  var option = new Options(req.body.q2);
  category.lines.push({ option });
  var option = new Options(req.body.q3);
  category.lines.push({ option });
  var option = new Options(req.body.q4);
  category.lines.push({ option });

  category.questionCount = 4;
  category.questionOrder = 1;

  //Create a question survey
  let updateQuestion = Question({
    _id: id,
    title: req.body.title,
    questionType: req.body.questionType,
    userCreator: req.body.userCreator,
    publish: req.body.publish,
    status: req.body.status,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    category: category,
  });

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
