let mongoose = require("mongoose");

// create question model class
let Question = mongoose.Schema(
  {
    title: String,
    qestionType: Boolean, // False for single answer, True for multiple answer
    userCreator: String,
    publish: String,
    status: Boolean,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    category: {
      lines: [
        {
          option: {
            name: String,
          },
        },
      ],
      questionCount: Number,
      questionOrder: Number,
    },
  },
  {
    collection: "questions",
  }
);

module.exports = mongoose.model('Question', Question);