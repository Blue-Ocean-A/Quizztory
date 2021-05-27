const mongoose = require('mongoose');

const mongoURI = 'mongodb://3.143.204.61:27017/quizztory';

const db = mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then((db) => console.log(`Connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db;
