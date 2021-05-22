/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  quizDiv: {
    backgroundColor: theme.palette.primary.dark,
    height: '450px',
    padding: '30px',
  },
  resultsDiv: {
    backgroundColor: theme.palette.secondary.main,
    padding: '30px',
    margin: '20px',
    width: '92%',
  },
  resultsTitle: {
    backgroundColor: theme.palette.secondary.light,
    padding: '20px',
    margin: '50px 0 0 0',
  },
  button: {
    backgroundColor: 'none',
    width: '150px',
    height: '50px',
    padding: '10px',
    margin: '20px',
    color: '#F2EECA',
  },
}));

const QuizResults = ({ currentQuiz, score, setDisplay }) => {
  const percentScore = (score) => {
    const number = (score / (currentQuiz.questions.length)) * 100;
    const percent = number.toString().concat('%');
    return percent;
  };

  const classes = useStyles();
  const { questions } = currentQuiz;

  const handleClick = (isCorrect) => {
    setDisplay('home');
  };

  return (
    <Container className={classes.quizDiv} maxWidth="sm">
      <Typography variant="h2" component="h2" align="center" gutterBottom="true">{currentQuiz.name}</Typography>
      <Container className={classes.resultsTitle}>
        <Typography variant="h3" component="h3">You Scored</Typography>
        <Typography variant="h1" component="h1">{percentScore(score)}</Typography>
        <Typography variant="body1" component="body1">
          (
          {score}
          {' '}
          /
          {' '}
          {currentQuiz.questions.length}
          )
        </Typography>
      </Container>
      <button id="quiz-over-button" onClick={handleClick}>Choose another quiz</button>
    </Container>
  );
};

export default QuizResults;
