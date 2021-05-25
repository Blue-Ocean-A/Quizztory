import React from 'react';
import { makeStyles, Paper, Container } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { v4 as uuidv4 } from 'uuid';

const axios = require('axios');

export default function StickyHeadTable({ user, friend }) {
  const currentUser = user;
  console.log(user);
  const comparedUserName = friend;
  const comparedUser = axios.get(`http://localhost:3000/api/userProfile?name=${comparedUserName}`);

  const columns = [
    { id: 'currentUserScores', label: `${name}`, minWidth: 170 },
    { id: 'quizName', label: 'Quiz Name', minWidth: 190 },
    { id: 'comparedUserScores', label: `${comparedUserName}`, minWidth: 170 },
  ];

  const rows = [];

  function createData(currentUser, comparedUser) {
    currentUser.map((score) => {
      comparedUser.map((item) => {
        if (score.quizName === item.quizName) {
          rows.push({ currentUserScores: score.score, quizName: score.quizName, comparedUserScores: item.score });
        }
      });
    });
  }

  createData(currentUser.results, comparedUser.results);

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
  const classes = useStyles();

  return (
    <Container component={Paper} className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={uuidv4()}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice().map((row) => (
              <TableRow key={uuidv4()} hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={uuidv4()} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
