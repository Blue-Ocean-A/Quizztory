/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import QuizztoryLogo from '../../../QuizztoryLogo.png';
import Login from './Login.jsx';
import Create from './Create.jsx';
import Friends from './Friends.jsx';
import FriendsResults from './FriendsResults.jsx';
import Quiz from './Quiz.jsx';
import QuizList from './QuizList.jsx';
import SignUp from './SignUp.jsx';
import GoogleLogout from './GoogleLogout.jsx';

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
}));

const App = () => {
  const [showBack, setShowBack] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allQuizzes, setAllQuizzes] = useState();
  const [currentQuiz, setCurrentQuiz] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState('login');
  const classes = useStyles();

  useEffect(() => {
    axios.get('/api/quizzes')
      .then((response) => {
        setAllQuizzes(response.data);
        window.history.pushState({}, null, '/');
      })
      .catch((error) => {
        console.log('Error in useEffect: ', error);
      });
  }, []);

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
        <GoogleLogout setDisplay={setDisplay} />
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={6}>
            <QuizList
              allQuizzes={allQuizzes}
              setCurrentQuiz={setCurrentQuiz}
              setDisplay={setDisplay}
            />
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
            currentUser={currentUser}
            display={display}
            setDisplay={setDisplay}
          />
        </Grid>
      </>
    );
  }
};

export default App;
