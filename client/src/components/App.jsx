/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import theme from '../theme.js';
import QuizztoryLogo from '../../../QuizztoryLogo.png';
import Login from './Login.jsx';
import Create from './Create.jsx';
import FriendsList from './Friends.jsx';
import FriendsResults from './FriendsResults.jsx';
import Quiz from './Quiz.jsx';
import Results from './Results.jsx';
import QuizList from './QuizList.jsx';
import historyEasy from '../quizData/historyEasy.js';

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
  const [allQuizzes, setAllQuizzes] = useState([historyEasy]);
  const [currentQuiz, setCurrentQuiz] = useState(historyEasy);
  const [currentUser, setCurrentUser] = useState();
  const [display, setDisplay] = useState('quiz');

  const classes = useStyles();

  return (

    <Grid container>
      <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
      {display === 'login' && (
        <Login setDisplay={setDisplay} setCurrentUser={setCurrentUser} />
      )}
      {display === 'home' && (
        <Grid>
          <Grid item>
            <QuizList allQuizzes={allQuizzes} />
            <FriendsList />
            <Results />
          </Grid>
        </Grid>
      )}
      {display === 'quiz' && (
        <Quiz
          currentQuiz={currentQuiz}
          display={display}
          setDisplay={setDisplay}
        />
      )}
      {display === 'quizResults' && (
        <Quiz
          currentQuiz={currentQuiz}
          display={display}
          setDisplay={setDisplay}
          currentUser={currentUser}
        />
      )}
    </Grid>

  );
};

export default App;
