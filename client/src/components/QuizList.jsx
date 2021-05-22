import React from 'react';
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
  },
  row: {
    backgroundColor: theme.palette.primary.light,
  },
}));

function createData(quizName, topic, difficulty) {
  return {
    quizName, topic, difficulty,
  };
}

const rows = [
  createData('The easiest history quiz in the world', 'History', 'Easy'),
  createData('The history quiz only a teacher can pass', 'History', 'Hard'),
  createData('American History Quiz', 'History', 'Medium'),
  createData('Animals for the whole family quiz', 'Nature', 'Easy'),
  createData('Name that country', 'Random', 'Hard'),
  createData('The Berry Best fruits', 'Nature', 'Easy'),
  createData('Am I a person, place or thing?', 'History', 'Middle'),
];

const QuizList = () => {
  const classes = useStyles();

  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Typography align="right">Take A Quiz</Typography>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell>Quiz Name</TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow className={classes.nested} key={row.quizName}>
                <TableCell component="th" scope="row">
                  {row.quizName}
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
