/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import QuizztoryLogo from '../../../QuizztoryLogo.png';
import Login from './Login.jsx';
import Create from './Create.jsx';
import Friends from './Friends.jsx';
import FriendsResults from './FriendsResults.jsx';
import Quiz from './Quiz.jsx';
import Results from './Results.jsx';
import QuizList from './QuizList.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
  image: {
    height: 200,
    width: '100%',
    marginLeft: 500,
    marginRight: 500,
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

  return (
    <Grid container>
      <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" justifyContent="center" />
      {display === 'login' && (
        <Login setDisplay={setDisplay} setCurrentUser={setCurrentUser} />
      )}
      {display === 'home' && (
        <Grid>
          <Grid item>
            <QuizList allQuizzes={allQuizzes} />
            {/* <Friends />
            <Results />
            <Quiz /> */}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default App;
