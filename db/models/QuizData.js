const mongoose = require('mongoose');

const quizdataSchema = new mongoose.Schema({
  name: { type: String, index: true },
  topic: String,
  difficulty: String,
  questions: Array,
});

const QuizData = mongoose.model('QuizData', quizdataSchema);

module.exports = QuizData;
