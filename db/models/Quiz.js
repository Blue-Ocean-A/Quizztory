const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: String,
  topic: String,
  difficulty: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;


