const mongoose = require('mongoose');

const quizdataSchema = new mongoose.Schema({
  name: String,
  questions: Array
});

const QuizData = mongoose.model('QuizData', quizdataSchema);

module.exports = QuizData;
