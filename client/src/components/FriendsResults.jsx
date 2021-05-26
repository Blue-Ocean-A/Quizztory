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

  const columns = [
    { id: 'currentUserScores', label: `${currentUser.name}`, minWidth: 170 },
    { id: 'quizName', label: 'Quiz Name', minWidth: 190 },
    { id: 'comparedUserScores', label: `${comparedUserName}`, minWidth: 170 },
  ];

  function createData() {
    if (currentUser.results.length > 0 && comparedUser.results.length > 0) {
      currentUser.results.forEach((result) => {
        comparedUser.results.forEach((item) => {
          if (result.quizName === item.quizName) {
            setRows([...rows, { currentUserScores: result.score, quizName: result.quizName, comparedUserScores: item.score }]);
          }
        });
      });
      if (rows.length < 1) {
        setRows([{ currentUserScores: 'No scores to compare', quizName: 'No quizzes to compare', comparedUserScores: 'No scores to compare' }]);
      }
    } else {
      console.log('else block');
      setRows([{ currentUserScores: 'No scores to compare', quizName: 'No quizzes to compare', comparedUserScores: 'No scores to compare' }]);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProfile?name=${comparedUserName}`)
      .then((response) => {
        // console.log(response.data[0]);
        setComparedUser(response.data[0]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    if (comparedUser) {
      createData();
    }
  }, [comparedUser]);

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
                {rows.length && rows.map((row) => {
                  console.log('row: ', row);
                  return (
                    <TableRow key={uuidv4()} hover role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={uuidv4()} align={column.align}>{value}</TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </Container>
  );
}
