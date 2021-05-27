/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function FriendsResults({ user, friend }) {
  const [comparedUser, setComparedUser] = useState();
  const [rows, setRows] = useState([]);
  const currentUser = user;
  const comparedUserName = friend;
  const resultsObj = {};
  const arrayOfRows = [];

  const columns = [
    { id: 'currentUserScores', label: `${currentUser.name}`, minWidth: 170 },
    { id: 'quizName', label: 'Quiz Name', minWidth: 190 },
    { id: 'comparedUserScores', label: `${comparedUserName}`, minWidth: 170 },
  ];

  function createData() {
    // console.log('This is currentUser ', currentUser);
    // console.log('This is comparedUser ', comparedUser);
    if (currentUser.results.length > 0 && comparedUser.results.length > 0) {
      currentUser.results.map((result) => {
        resultsObj[result.quizName] = { current: result.score, compared: 'no score yet' };
      });
      comparedUser.results.map((result) => {
        if (resultsObj[result.quizName]) {
          resultsObj[result.quizName].compared = result.score;
        } else {
          resultsObj[result.quizName] = { current: 'no score yet', compared: result.score };
        }
      });
    } else {
      resultsObj['No quizzes to compare'] = { current: 'No results to compare', compared: 'No results to compare' };
    }
    // console.log('resultsObj: ', resultsObj);
    for (var quiz in resultsObj) {
      arrayOfRows.push({ currentUserScores: resultsObj[quiz].current, quizName: quiz, comparedUserScores: resultsObj[quiz].compared });
    }
    return arrayOfRows;
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProfile?name=${comparedUserName}`)
      .then((response) => {
        setComparedUser(response.data[0]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    if (comparedUser) {
      createData();
      setRows(arrayOfRows);
    }
  }, [comparedUser]);

  const useStyles = makeStyles({
    root: {
      width: '80%',
      marginTop: '20rem',
    },
    container: {
      maxHeight: 440,
    },
  });
  const classes = useStyles();

  return (
    <Container>
      {comparedUser && (
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
                {rows.length && rows.map((row) => (
                  // console.log('row: ', row);
                  <TableRow key={uuidv4()} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={uuidv4()} align={column.align}>{value}</TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </Container>
  );
}
