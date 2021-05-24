/* eslint-disable max-len */

const Credential = require('./models/Credential.js');
const Profile = require('./models/Profile.js');
const Quiz = require('./models/Quiz.js');
const QuizData = require('./models/QuizData.js');

//see if a user has correct password
const getUser = (name, password, cb) => {
  Credential.find({ name: name, password: password }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//get a specific user's profile
const getUserProfile = (name, cb) => {
  Profile.find({ name }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//get a list of all quiz names, topics, and difficulty levels
const getQuizzes = (cb) => {
  Quiz.find({}, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//get a specific quiz's Q's and A's
const getQuizzData = (name, cb) => {
  QuizData.find({ name }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//post a new user and password to credentials collection, make new profile
const postUser = (body, cb) => {
  Credential.create({ name: body.name, password: body.password }, (error) => {
    if (error) {
      cb(error, null);
    } else {
      Profile.create({ name: body.name }, (err, results) => {
        if (error) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  });
};

//post new quiz to quizzes and quiz data collections
const postQuiz = (body, cb) => {
  QuizData.create({
    name: body.name, topic: body.topic, difficulty: body.difficulty, questions: body.questions,
  }, (error) => {
    if (error) {
      cb(error, null);
    } else {
      Quiz.create({ name: body.name, topic: body.topic, difficulty: body.difficulty }, (err, results) => {
        if (error) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  });
};

//adds quiz name and score to profile
const putQuizResult = (body, cb) => {
  Profile.updateOne({ name: body.userName }, { $push: { results: { quizName: body.quizName, score: body.score } } }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//adds requester to incoming of requestee, adds requestee to outgoing of requester
const putFriendRequest = (body, cb) => {
  Profile.updateOne({ name: body.requestee }, { $push: { incoming: body.requester } }, (error) => {
    if (error) {
      cb(error, null);
    } else {
      Profile.updateOne({ name: body.requester }, { $push: { outgoing: body.requestee } }, (err, results) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  });
};

//adds both users to the other’s friend list and removes request
const putFriendAccept = (body, cb) => {
  Profile.updateOne({ name: body.requestee }, { $push: { friends: body.requester }, $pull: { incoming: body.requester } }, (error) => {
    if (error) {
      cb(error, null);
    } else {
      Profile.updateOne({ name: body.requester }, { $push: { friends: body.requestee }, $pull: { incoming: body.requestee } }, (err, results) => {
        if (error) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  });
};

//removes requester from requestee's incoming, does NOT remove requestee from requester's outgoing
const putFriendReject = (body, cb) => {
  Profile.updateOne({ name: body.requestee }, { $pull: { incoming: body.requester } }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getUser,
  getUserProfile,
  getQuizzes,
  getQuizzData,
  postUser,
  postQuiz,
  putQuizResult,
  putFriendRequest,
  putFriendAccept,
  putFriendReject,
};
