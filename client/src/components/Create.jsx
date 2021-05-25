/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { 
  Container,
  Typography,
  Button,
  TextField,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { CodeTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme, text) => ({
  createDiv: {
    backgroundColor: theme.palette.primary.dark,
    margin: '5rem',
    padding: '30px',
  },
  pageDiv: {
    backgroundColor: theme.palette.secondary.main,
    padding: '30px',
    margin: '20px',
    width: '92%',
  },
  detailDiv: {
    backgroundColor: theme.palette.secondary.main,
    padding: '30px',
    margin: '20px',
    width: '92%',
  },
  questionDiv: {
    backgroundColor: theme.palette.secondary.light,
    padding: '30px',
    margin: '20px',
    width: '92%',
  },
  inputDiv: {
    backgroundColor: theme.palette.primary.light,
    color: 'black',
    fontFamily: 'Montserrat, san-serif',
    width: '100%',
    height: '50px',
    lineHeight: '1.4',
  },
}));
const page = [
  'Question 1 / 10',
  'Question 2 / 10',
  'Question 3 / 10',
  'Question 4 / 10',
  'Question 5 / 10',
  'Question 6 / 10',
  'Question 7 / 10',
  'Question 8 / 10',
  'Question 9 / 10',
  'Question 10 / 10',
];
const topics = ['History', 'Nature', 'Random'];
const difficulties = ['Easy', 'Medium', 'Hard'];


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
  const [index, setIndex] = useState(1);

  const classes = useStyles();

  const correctAnswer = () => {};
  const cancel = () => {
    setDisplay('home');
  };
  const previous = () => {};
  const next = () => {};
  const submit = () => {
    axios.post()
      .then()
      .catch();
  };

  return (
    <Container className={classes.createDiv} maxWidth="sm">
      <Typography variant="h2" component="h2" align="center" gutterBottom="true">Create A Quiz</Typography>
      <Container className={classes.detailDiv}>
        <Typography variant="h4" component="h4" color="textSecondary" align="center" gutterBottom="true">
          Quiz Details
        </Typography>
        <TextField
          color="black"
          className={classes.inputDiv}
          label="Quiz Name"
          variant="filled"
          name="name"
        />
        <TextField
          className={classes.inputDiv}
          label="Quiz Topic"
          variant="filled"
          select
          name="topic"
        >
          {topics.map((topic) => (
            <MenuItem key={topic} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.inputDiv}
          label="Difficulty"
          variant="filled"
          select
          name="difficulty"
        >
          {difficulties.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
      </Container>
      <Container className={classes.questionDiv}>
        <Typography variant="h4" component="h4" color="textPrimary" align="center" gutterBottom="true">
          Question
          {' '}
          {index}
          {' '}
          /
          {' '}
          10
        </Typography>
        <TextField
          color="black"
          className={classes.inputDiv}
          label="Question Text"
          variant="filled"
          name="text"
        />
        <TextField
          color="black"
          className={classes.inputDiv}
          variant="filled"
          label="Answer A"
          name="a"
        />
        <TextField
          color="black"
          className={classes.inputDiv}
          label="Answer B"
          variant="filled"
          name="b"
        />
        <TextField
          color="black"
          className={classes.inputDiv}
          label="Answer C"
          variant="filled"
          name="c"
        />
        <TextField
          color="black"
          className={classes.inputDiv}
          label="Answer D"
          variant="filled"
          name="d"
        />
      </Container>
      <Container className={classes.questionDiv}>
        <Typography variant="h4" component="h4" color="textPrimary" align="center" gutterBottom="true">
          Correct Answer:
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="correct" onChange={correctAnswer}>
            <FormControlLabel label="A" control={<Radio />} value="a" />
            <FormControlLabel label="B" control={<Radio />} value="b" />
            <FormControlLabel label="C" control={<Radio />} value="c" />
            <FormControlLabel label="D" control={<Radio />} value="d" />
          </RadioGroup>
        </FormControl>
      </Container>
      <Button
        variant="contained"
        className={classes.createButton}
        onClick={cancel}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        className={classes.createButton}
        onClick={previous}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        className={classes.createButton}
        onClick={next}
      >
        Next
      </Button>
      <Button
        variant="contained"
        className={classes.createButton}
        onClick={submit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
