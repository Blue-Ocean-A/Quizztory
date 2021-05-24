/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  table: {
    backgroundColor: theme.palette.primary.dark,
    minWidth: 650,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  row: {
    backgroundColor: theme.palette.primary.light,
  },
  text: {
    color: theme.palette.primary.light,
  },
}));

const QuizList = ({ allQuizzes, setCurrentQuiz, setDisplay }) => {
  const classes = useStyles();

  const handleQuizClick = (quizName) => {
    axios.get(`/api/quizzData?name=${quizName}`)
      .then((response) => {
        setCurrentQuiz(response.data[0]);
        setDisplay('quiz');
      })
      .catch((error) => {
        console.log('Error getting quiz data: ', error);
      });
    // setCurrentQuiz(quiz);
    // setDisplay('quiz');
  };

  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Typography component="h3" variant="h3" align="right" className={classes.text}>Take A Quiz</Typography>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell>Quiz Name</TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allQuizzes.map((row) => (
              // eslint-disable-next-line max-len
              <TableRow className={classes.nested} key={row.name} onClick={() => handleQuizClick(row.name)}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.topic}</TableCell>
                <TableCell align="right">{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default QuizList;
