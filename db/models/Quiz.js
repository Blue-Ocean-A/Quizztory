const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  quizname: String,
  questions: Array
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;