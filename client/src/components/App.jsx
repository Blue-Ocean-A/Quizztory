/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import QuizztoryLogo from '../../../QuizztoryLogo.png';
import Login from './Login.jsx';
import Create from './Create.jsx';
import Friends from './Friends.jsx';
import FriendsResults from './FriendsResults.jsx';
import Quiz from './Quiz.jsx';
import Results from './Results.jsx';
import QuizList from './QuizList.jsx';
import Score from './Score.jsx';
import SignUp from './SignUp.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 200,
  },
  root: {
    backgroundColor: theme.palette.primary.light,
  },
  image: {
    height: 150,
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
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState('login');
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <img className={classes.image} src={QuizztoryLogo} alt="Quizztory" />
      {display === 'login' && (
        <Login
          setDisplay={setDisplay}
          setCurrentUser={setCurrentUser}
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
        />
      )}
      {display === 'SignUp' && (
        <SignUp
          setDisplay={setDisplay}
          setCurrentUser={setCurrentUser}
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
        />
      )}
      {display === 'home' && (
        <>
          <Grid item>
            <QuizList allQuizzes={allQuizzes} />
          </Grid>
            {/* <Friends />
            <Results />
            <Quiz /> */}
          <Grid item style={{ textAlign: 'right' }}>
            <Score />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default App;
