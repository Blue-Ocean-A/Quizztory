/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  createDiv: {
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
  inputDiv: {
    backgroundColor: theme.palette.secondary.light,
    padding: '20px',
    width: '90%',
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    width: '150px',
    height: '50px',
    padding: '10px',
    margin: '20px',
  },
}));

const Create = ({ setDisplay }) => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({
    text: '',
    answers: [
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
    ],
  });

  const classes = useStyles();

  return (
    <Container className={classes.createDiv} maxWidth="sm">
      <Typography variant="h2" component="h2" align="center" gutterBottom="true">Create A Quiz</Typography>
      <Typography variant="body2" component="body2" color="textSecondary" align="center" gutterBottom="true">
        Question
        {' '}
        {' '}
        /
        {' '}
        {questions.length + 1}
      </Typography>
      <Container className={classes.questionDiv}>
        <Container className={classes.inputDiv}>
          <TextField id="filled-basic" label="Question Text" variant="filled" />
        </Container>
          <Button>Cancel</Button>
          <Button>Previous</Button>
          <Button>Next</Button>
      </Container>
    </Container>
  );
};

export default Create;
