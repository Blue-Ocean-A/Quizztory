const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: { type: String, index: true },
  topic: String,
  difficulty: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
