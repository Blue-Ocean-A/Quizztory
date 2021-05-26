/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  quizDiv: {
    backgroundColor: theme.palette.primary.dark,
    height: '450px',
    padding: '30px',
    margin: '5rem',
    alignItems: 'center',
    justify: 'center',
  },
  resultsTitle: {
    backgroundColor: theme.palette.secondary.light,
    padding: '80px',
    justify: 'center',
    alignItem: 'center',
    margin: '50px',
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

const QuizResults = ({
  currentQuiz, score, setScore, setDisplay,
}) => {
  const classes = useStyles();
  const { questions } = currentQuiz;

  useEffect(() => {
  }, [score]);

  const percentScore = (score) => {
    const number = (score / (questions.length)) * 100;
    const percent = number.toFixed().toString().concat('%');
    return percent;
  };

  const handleClick = () => {
    setDisplay('home');
    setScore(0);
  };

  return (
    <Grid className={classes.quizDiv} component={Paper}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>{currentQuiz.name}</Typography>
      <Grid className={classes.resultsTitle} component={Paper}>
        <Typography variant="h3" component="h3" align="center">You Scored</Typography>
        <Typography variant="h1" component="h1" align="center" margin="20px">{percentScore(score)}</Typography>
        <Typography variant="h4" component="h4" align="center">
          (
          {score}
          {' '}
          /
          {' '}
          {currentQuiz.questions.length}
          )
        </Typography>
      </Grid>
      <button type="button" id="quiz-over-button" onClick={handleClick}>Choose another quiz</button>
    </Grid>
  );
};

export default QuizResults;
