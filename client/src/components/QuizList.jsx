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
  div: {
    height: '28rem',
    overflowX: 'scroll',
  },
  table: {
    backgroundColor: theme.palette.primary.dark,
    minWidth: 650,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
    },
  },
  row: {
    backgroundColor: theme.palette.primary.light,
  },
  text: {
    color: theme.palette.text.secondary,
    fontFamily: 'Montserrat, san-serif',
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
        throw error;
      });
  };

  return (
    <Grid>
      <TableContainer component={Paper} className={classes.div}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ borderBottom: 'none' }}>
                <Typography component="h3" variant="h3" className={classes.text}>Take A Quiz</Typography>
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell style={{ borderBottom: 'none' }}>Quiz Name</TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">Topic</TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allQuizzes.map((row) => (
              // eslint-disable-next-line max-len
              <TableRow className={classes.nested} key={row.name} onClick={() => handleQuizClick(row.name)}>
                <TableCell className={classes.text} component="th" scope="row" style={{ borderBottom: 'none' }}>
                  {row.name}
                </TableCell>
                <TableCell className={classes.text} align="right" style={{ borderBottom: 'none' }}>{row.topic}</TableCell>
                <TableCell className={classes.text} align="right" style={{ borderBottom: 'none' }}>{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default QuizList;
