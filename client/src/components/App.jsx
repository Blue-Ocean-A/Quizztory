/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
<<<<<<< HEAD
import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core';
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
>>>>>>> f7a4ef915b734acb330ed82f39e867ec0fd685f4
import QuizztoryLogo from '../../../QuizztoryLogo.png';
import Login from './Login.jsx';
import Create from './Create.jsx';
import Friends from './Friends.jsx';
import FriendsResults from './FriendsResults.jsx';
import Quiz from './Quiz.jsx';
import QuizList from './QuizList.jsx';
import SignUp from './SignUp.jsx';
import historyMedium from '../quizData/historyMedium.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 200,
  },
  root: {
    backgroundColor: theme.palette.primary.light,
    dispay: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '60%',
  },
  image: {
    display: 'flex',
    width: '30vw',
    margin: '25 auto 20 auto',
  },
  quizzList: {
  },
  createButton: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    dispay: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const App = () => {
  const [showBack, setShowBack] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
<<<<<<< HEAD
  const [allQuizzes, setAllQuizzes] = useState([historyEasy]);
  const [currentQuiz, setCurrentQuiz] = useState(historyEasy);
=======
  const [allQuizzes, setAllQuizzes] = useState();
  const [currentQuiz, setCurrentQuiz] = useState();
>>>>>>> f7a4ef915b734acb330ed82f39e867ec0fd685f4
  const [currentUser, setCurrentUser] = useState();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState('login');
  const classes = useStyles();
<<<<<<< HEAD
=======

  useEffect(() => {
    axios.get('/api/quizzes')
      .then((response) => {
        setAllQuizzes(response.data);
        window.history.pushState({}, null, '/');
      })
      .catch((error) => {
        console.log('Error in useEffect: ', error);
      });
  }, [display]);

>>>>>>> f7a4ef915b734acb330ed82f39e867ec0fd685f4
  if (display === 'login') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Login
          setDisplay={setDisplay}
          setCurrentUser={setCurrentUser}
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
        />
      </>
    );
  }

  if (display === 'home') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={6}>
<<<<<<< HEAD
            <QuizList allQuizzes={allQuizzes} />
            <Button
              variant="contained"
              aria-label="create"
              className={classes.createButton}
              onClick={() => { setDisplay('create'); }}
            >
              Create A Quiz
            </Button>
=======
            <QuizList
              allQuizzes={allQuizzes}
              setCurrentQuiz={setCurrentQuiz}
              setDisplay={setDisplay}
            />
>>>>>>> f7a4ef915b734acb330ed82f39e867ec0fd685f4
          </Grid>
          <Grid item xs={2}>
            <Friends />
          </Grid>
        </Grid>
      </>
    );
  }

  if (display === 'signUp') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <SignUp
          setDisplay={setDisplay}
          setCurrentUser={setCurrentUser}
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
        />
      </>
    );
  }

  if (display === 'quiz' || display === 'quizResults') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Grid container spacing={2} className={classes.root}>
          <Quiz
            currentQuiz={currentQuiz}
            display={display}
            setDisplay={currentUser}
          />
        </Grid>
      </>
    );
  }

  if (display === 'create') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Grid container spacing={2} className={classes.root}>
          <Create
            setDisplay={currentUser}
          />
        </Grid>
      </>
    );
  }
};

export default App;
