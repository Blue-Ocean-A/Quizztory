const mongoose = require('mongoose');

const quizdataSchema = new mongoose.Schema({
  name: String,
  topic: String,
  difficulty: String,
  questions: Array,
});

const QuizData = mongoose.model('QuizData', quizdataSchema);

module.exports = QuizData;
