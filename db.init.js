const fs = require('fs');
const mongoose = require('mongoose');
const Credential = require('./db/models/Credential');
const Profile = require('./db/models/Profile');
const Quiz = require('./db/models/Quiz');
const QuizData = require('./db/models/QuizData');

const mongoURI = 'mongodb://localhost:27017/quizztory';

const credentialsJson = fs.readFileSync('./data/credentials.json');
const credentials = JSON.parse(credentialsJson);

const profilesJson = fs.readFileSync('./data/profiles.json');
const profiles = JSON.parse(profilesJson);

const quizsJson = fs.readFileSync('./data/quizzes.json');
const quizzes = JSON.parse(quizsJson);

const quizdatasJson = fs.readFileSync('./data/quizdatas.json');
const quizdatas = JSON.parse(quizdatasJson);

const db = mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then((db) => {
    Credential.insertMany(credentials, (err, results) => {
      if (err) {
        throw new Error('error seeding credentials');
      } else {
        Profile.insertMany(profiles, (err, results) => {
          if (err) {
            throw new Error('error seeding credentials');
          } else {
            Quiz.insertMany(quizzes, (err, results) => {
              if (err) {
                throw new Error('error seeding credentials');
              } else {
                QuizData.insertMany(quizdatas, (err, results) => {
                  if (err) {
                    throw new Error('error seeding credentials');
                  } else {
                    console.log('FINISHED SEEDING DATABASE, please exit node');
                  }
                });
              }
            });
          }
        });
      }
    });
  })
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI} for seeding`);
    console.log(err);
  });
