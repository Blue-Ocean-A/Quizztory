const Credential = require('./models/Credential.js');
const Profile = require('./models/Profile.js');
const Quiz = require('./models/Quiz.js');
const QuizData = require('./models/QuizData.js');

//see if a user has correct password
const getUser = (name, password, cb) => {
  Credential.find({ name, password }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//get a specific user's profile
const getUserProfile = (name, cb) => {
  Profile.findOne({ name }, (error, results) => {
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
  Credential.create({ body }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//post new quiz to quizzes and quiz data collections
const postQuiz = (body, cb) => {
  Quiz, QuizData.find({ body }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//adds quiz name and score to profile
const putQuizResult = (body, cb) => {
  Profile.find({ body }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//adds requester to incoming of requestee, adds requestee to outgoing of requester
const putFriendRequest = (body, cb) => {
  Profile.find({ body }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//adds both users to the other’s friend list and removes request
const putFriendAccept = (body, cb) => {
  Profile.find({ body }, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

//removes requester from requestee's incoming, does NOT remove requestee from requester's outgoing
const putFriendReject = (body, cb) => {
  Profile.find({ body }, (error, results) => {
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
