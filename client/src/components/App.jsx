/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import theme from '../theme.js';
import QuizztoryLogo from '../../../QuizztoryLogo.png';
import Login from './Login.jsx';
import Create from './Create.jsx';
import Friends from './Friends.jsx';
import FriendsResults from './FriendsResults.jsx';
import Quiz from './Quiz.jsx';
import QuizList from './QuizList.jsx';

const useStyles = makeStyles((theme) => ({
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
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [display, setDisplay] = useState('login');

  const classes = useStyles();

  if (display === 'login') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Login setDisplay={setDisplay} setCurrentUser={setCurrentUser} />
      </>
    );
  }

  if (display === 'home') {
    return (
      <>
        <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={6}>
            <QuizList allQuizzes={allQuizzes} />
          </Grid>
          <Grid item xs={2}>
            <Friends />
          </Grid>
        </Grid>
      </>
    );
  }
};

export default App;
