import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function StickyHeadTable({ user, friend }) {
  const [comparedUser, setComparedUser] = useState({});
  console.log(friend);
  console.log('UR:', user.results);
  // const currentUser = user;
  // const comparedUserName = 'kim';

  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProfile?name=${friend}`)
      .then((response) => {
        // console.log('res:', response.data);
        setComparedUser(response.data[0]);
      })
      .catch((error) => {
        console.log('error fetching friend: ', error);
      });
  }, []);

  const columns = [
    { id: 'currentUserScores', label: `${user.name}`, minWidth: 170 },
    { id: 'quizName', label: 'Quiz Name', minWidth: 190 },
    { id: 'comparedUserScores', label: `${friend}`, minWidth: 170 },
  ];

  const rows = [];

  function createData() {
    console.log('user in func', user.results);
    console.log('compared in func', comparedUser);
    user.results.map((result) => {
      comparedUser.results.map((item) => {
        if (result.quizName === item.quizName) {
          rows.push({ currentUserScores: result.score, quizName: result.quizName, comparedUserScores: item.score });
        }
      });
    });
  }

  useEffect(() => {
    createData();
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
    <Paper className={classes.root}>
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
    </Paper>
  );
}
