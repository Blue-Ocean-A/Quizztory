/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Button, Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import QuizResults from './QuizResults.jsx';

const useStyles = makeStyles((theme) => ({
  quizDiv: {
    backgroundColor: theme.palette.primary.dark,
    margin: '5rem',
    padding: '30px',
  },
  questionDiv: {
    backgroundColor: theme.palette.secondary.main,
    padding: '30px',
    margin: '20px',
    width: '92%',
  },
  questionTitle: {
    backgroundColor: theme.palette.secondary.light,
    padding: '20px',
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: '#D3E7D8',
    },
    fontFamily: 'Montserrat, san-serif',
    width: '175px',
    height: '100px',
    padding: '10px',
    margin: '20px',
    lineHeight: '1.4',
  },
  questionTracker: {
    width: '100%',
  },
}));

const Quiz = ({
  currentQuiz, currentUser, display, setDisplay,
}) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinal, setIsFinal] = useState(false);

  const classes = useStyles();
  const { questions } = currentQuiz;

  const updateScore = (score) => {
    const percentScore = ((score / (currentQuiz.questions.length)) * 100).toFixed().toString();
    const body = {
      userName: currentUser,
      quizName: currentQuiz.name,
      score: percentScore,
    };

    axios.put('/api/userProfile/score', body)
      .then((response) => {
        console.log(`${currentUser}'s score of ${percentScore} for ${currentQuiz.name} has been updated: `, response.data);
      })
      .catch((err) => {
        console.log(`ERROR updating ${currentUser.name}'s score: `, err);
      });
  };

  useEffect(() => {
    if (isFinal === true) {
      updateScore(score);
    }
  }, [isFinal]);

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    let oldIndex = index;
    if (oldIndex === questions.length - 1) {
      setIsFinal(true);
      setDisplay('quizResults');
      setIndex(0);
    } else {
      oldIndex += 1;
      setIndex(oldIndex);
    }
  };

  const handleBack = () => {
    setDisplay('home');
  };

  return (
    <div>
      {display === 'quiz' && (
        <>
          <Container className={classes.quizDiv} component={Paper} maxWidth="sm">
            <Typography variant="h2" component="h2" align="center" gutterBottom>{currentQuiz.name}</Typography>
            <Typography variant="h4" component="h4" color="textSecondary" align="center" gutterBottom>
              Question
              {' '}
              {index + 1}
              {' '}
              /
              {' '}
              {questions.length}
            </Typography>
            <Container className={classes.questionDiv}>
              <Container className={classes.questionTitle}>
                <Typography variant="h3" component="h3">{questions[index].text}</Typography>
              </Container>
              {questions[index].answers.map((answer) => (
                <Button
                  key={answer.text}
                  className={classes.button}
                  onClick={() => handleClick(answer.isCorrect)}
                >
                  {answer.text}
                </Button>
              ))}
            </Container>
          </Container>
          <button type="button" id="quiz-back-button" onClick={handleBack}>Back to Home</button>
        </>
      )}
      {display === 'quizResults' && (
        <QuizResults
          score={score}
          setScore={setScore}
          setDisplay={setDisplay}
          currentQuiz={currentQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
