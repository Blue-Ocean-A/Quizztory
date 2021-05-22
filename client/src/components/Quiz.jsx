/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import QuizResults from './QuizResults.jsx';

const useStyles = makeStyles((theme) => ({
  quizDiv: {
    backgroundColor: theme.palette.primary.dark,
    height: '450px',
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
    width: '150px',
    height: '50px',
    padding: '10px',
    margin: '20px',
  },
}));

const Quiz = ({ currentQuiz, display, setDisplay }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const classes = useStyles();
  const { questions } = currentQuiz;

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    let oldIndex = index;
    if (oldIndex === questions.length - 1) {
      setDisplay('quizResults');
    } else {
      oldIndex += 1;
      setIndex(oldIndex);
    }
  };

  return (
    <Container className={classes.quizDiv} maxWidth="sm">
      {display === 'quiz' && (
        <>
          <Typography variant="h2" component="h2" align="center" gutterBottom="true">{currentQuiz.name}</Typography>
          <Typography variant="body2" component="body2" color="textSecondary" align="center" gutterBottom="true">
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
        </>
      )}
      {display === 'quizResults' && (
        <QuizResults
          score={score}
          setDisplay={setDisplay}
        />
      )}
    </Container>
  );
};

export default Quiz;
