/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  ButtonGroup,
  TextField,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  createDiv: {
    backgroundColor: theme.palette.primary.dark,
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
    color: '#5B685E',
    fontFamily: 'Montserrat, san-serif',
    width: '100%',
    height: '50px',
    lineHeight: '1.4',
  },
  buttonDiv: {
    alignItems: 'center',
    justify: 'center',
    margin: '20px',
  },
}));

const topics = ['History', 'Nature', 'Random'];
const difficulties = ['Easy', 'Medium', 'Hard'];

const Create = ({ setDisplay }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);

  const [index, setIndex] = useState(1);
  const [submit, setSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [question, setQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');
  const [isCorrect, setIsCorrect] = useState('');

  const clearForm = () => {
    setQuestion('');
    setAnswerA('');
    setAnswerB('');
    setAnswerC('');
    setAnswerD('');
    setIsCorrect('');
  };

  const validateQuiz = () => {
    if (name.length === 0) {
      return false;
    }
    if (topic.length === 0) {
      return false;
    }
    if (difficulty.length === 0) {
      return false;
    }
    if (questions.length === 0) {
      return false;
    }
    return true;
  };

  const validateQuestion = () => {
    if (question.length === 0) {
      return false;
    }
    if (answerA.length === 0) {
      return false;
    }
    if (answerB.length === 0) {
      return false;
    }
    if (answerC.length === 0) {
      return false;
    }
    if (answerD.length === 0) {
      return false;
    }
    if (isCorrect === 'a' || isCorrect === 'b' || isCorrect === 'c' || isCorrect === 'd') {
      return true;
    }
    return false;
  };

  const cancel = () => {
    setDisplay('home');
  };
  const next = () => {
    if (index < 10) {
      const newQuestion = {
        text: question,
        answers: [
          { text: answerA, isCorrect: false },
          { text: answerB, isCorrect: false },
          { text: answerC, isCorrect: false },
          { text: answerD, isCorrect: false },
        ],
      };
      const ans = 'abcd';
      newQuestion.answers[ans.indexOf(isCorrect)].isCorrect = true;
      setQuestions(questions.concat(newQuestion));
    }
  };
  const submitQuiz = () => {
    axios({
      method: 'post',
      url: '/api/newQuiz',
      data: {
        name,
        topic,
        difficulty,
        questions,
      },
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        window.alert('Failed to create new quiz:', err);
      });
  };

  useEffect(() => {
    if (submit) {
      const newQuestion = {
        text: question,
        answers: [
          { text: answerA, isCorrect: false },
          { text: answerB, isCorrect: false },
          { text: answerC, isCorrect: false },
          { text: answerD, isCorrect: false },
        ],
      };
      const ans = 'abcd';
      newQuestion.answers[ans.indexOf(isCorrect)].isCorrect = true;
      setQuestions(questions.concat(newQuestion));
    }
  }, [submit]);
  useEffect(() => {
    if (submitted) {
      setDisplay('home');
    }
  }, [submitted]);
  useEffect(() => {
    if (submit) {
      submitQuiz();
    } else if (questions.length > 0) {
      setIndex(index + 1);
    }
  }, [questions]);
  useEffect(() => {
    clearForm();
  }, [index]);

  return (
    <Container className={classes.createDiv} maxWidth="sm" component={Paper}>
      <Typography variant="h2" component="h2" align="center">Create A Quiz</Typography>
      <Container className={classes.detailDiv} component={Paper}>
        <Typography variant="h4" component="h4" color="textSecondary" align="center" style={{ marginBottom: '20px' }}>
          Quiz Details
        </Typography>
        <TextField
          className={classes.inputDiv}
          label="Quiz Name"
          variant="filled"
          name="name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <TextField
          className={classes.inputDiv}
          label="Topic"
          variant="filled"
          select
          name="topic"
          value={topic}
          onChange={(e) => { setTopic(e.target.value); }}
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
          value={difficulty}
          name="difficulty"
          onChange={(e) => { setDifficulty(e.target.value); }}
        >
          {difficulties.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
      </Container>
      <Container className={classes.questionDiv} component={Paper}>
        <Typography variant="h4" component="h4" color="textPrimary" align="center" style={{ marginBottom: '20px' }}>
          Question
          {' '}
          {index}
          {' '}
          /
          {' '}
          10
        </Typography>
        <Typography variant="h4" component="h4" color="textPrimary" align="left">
          Question Text
        </Typography>
        <input
          type="text"
          className={classes.inputDiv}
          value={question}
          onChange={(e) => {
            e.preventDefault();
            setQuestion(e.target.value);
          }}
        />
        <Typography variant="h4" component="h4" color="textPrimary" align="left">
          Answer A
        </Typography>
        <input
          type="text"
          className={classes.inputDiv}
          value={answerA}
          onChange={(e) => {
            e.preventDefault();
            setAnswerA(e.target.value);
          }}
        />
        <Typography variant="h4" component="h4" color="textPrimary" align="left">
          Answer B
        </Typography>
        <input
          type="text"
          className={classes.inputDiv}
          value={answerB}
          onChange={(e) => {
            e.preventDefault();
            setAnswerB(e.target.value);
          }}
        />
        <Typography variant="h4" component="h4" color="textPrimary" align="left">
          Answer C
        </Typography>
        <input
          type="text"
          className={classes.inputDiv}
          value={answerC}
          onChange={(e) => {
            e.preventDefault();
            setAnswerC(e.target.value);
          }}
        />
        <Typography variant="h4" component="h4" color="textPrimary" align="left">
          Answer D
        </Typography>
        <input
          type="text"
          className={classes.inputDiv}
          value={answerD}
          onChange={(e) => {
            e.preventDefault();
            setAnswerD(e.target.value);
          }}
        />
      </Container>
      <Container className={classes.questionDiv} component={Paper}>
        <Typography variant="h4" component="h4" color="textPrimary" align="center">
          Correct Answer:
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="correct"
            value={isCorrect}
            onChange={(e) => {
              e.preventDefault();
              setIsCorrect(e.target.value);
            }}
          >
            <FormControlLabel label="A" control={<Radio />} value="a" />
            <FormControlLabel label="B" control={<Radio />} value="b" />
            <FormControlLabel label="C" control={<Radio />} value="c" />
            <FormControlLabel label="D" control={<Radio />} value="d" />
          </RadioGroup>
        </FormControl>
      </Container>
      <Box className={classes.buttonDiv} style={{ textAlign: 'center' }}>
        <ButtonGroup>
          <Button
            className={classes.buttons}
            variant="contained"
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.buttons}
            onClick={(e) => {
              e.preventDefault();
              if (validateQuestion()) {
                next();
              } else {
                window.alert('Please finish current question');
              }
            }}
          >
            Next
          </Button>
          <Button
            variant="contained"
            className={classes.buttons}
            onClick={(e) => {
              e.preventDefault();
              if (validateQuestion() && validateQuiz()) {
                setSubmit(true);
              } else {
                window.alert('Please finish current question or quiz details before submitting');
              }
            }}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Create;
