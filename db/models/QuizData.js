const mongoose = require('mongoose');

const quizdataSchema = new mongoose.Schema({
  name: String,
  password: String,
  block: Array
});

const QuizData = mongoose.model('QuizData', quizdataSchema);

module.exports = QuizData;