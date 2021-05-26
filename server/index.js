/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
const express = require('express');
const cors = require('cors');
const db = require('../db/index.js');

const app = express();
const queries = require('../db/controllers.js');

// serve static files from dist dir
app.use(express.static(`${__dirname}/../client/dist`));

// middleware
// use express.json for parsing JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());

/// // GET REQUESTS ////
// see if a user has correct password
app.get('/api/user', (req, res) => {
  queries.getUser(req.query.name, req.query.password, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.send(data);
    }
  });
});

// get a specific user's profile
app.get('/api/userProfile', (req, res) => {
  queries.getUserProfile(req.query.name, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  });
});

// get a list of all quiz names, topics, and difficulty levels
app.get('/api/quizzes', (req, res) => {
  queries.getQuizzes((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.send(data);
    }
  });
});

// get a specific quiz's Q's and A's
app.get('/api/quizzData', (req, res) => {
  queries.getQuizzData(req.query.name, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.send(data);
    }
  });
});

// get a list of all usernames
app.get('/api/allUsers', (req, res) => {
  queries.getAllUsers((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.send(data);
    }
  });
});

/// // POST REQUESTS ////
// post a new user and password to credentials collection, make new profile
app.post('/api/userProfile', (req, res) => {
  queries.postUser(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(response);
      res.end('Successfully added user!');
    }
  });
});

// post new quiz to quizzes and quiz data collections
app.post('/api/newQuiz', (req, res) => {
  queries.postQuiz(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(response);
      res.end('Successfully added new quiz!');
    }
  });
});

/// // PUT REQUESTS ////
// adds quiz name and score to profile
app.put('/api/userProfile/score', (req, res) => {
  queries.putQuizResult(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(response);
      res.end('Successfully added quiz score!');
    }
  });
});

// adds requester to incoming of requestee, adds requestee to outgoing of requester
app.put('/api/userProfile/request', (req, res) => {
  queries.putFriendRequest(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(response);
      res.end('Successfully added friend request!');
    }
  });
});

// adds both users to the other’s friend list and removes request
app.put('/api/userProfile/accept', (req, res) => {
  queries.putFriendAccept(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(response);
      res.end('Successfully added friend!');
    }
  });
});

// removes requester from requestee's incoming, does NOT remove requestee from requester's outgoing
app.put('/api/userProfile/deny', (req, res) => {
  queries.putFriendReject(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(response);
      res.end('Successfully deleted friend request!');
    }
  });
});

// set port where server will listen
const port = 3000;

// tell server to listen on predefined port
app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
