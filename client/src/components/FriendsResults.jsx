import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function StickyHeadTable({user, friend}) {
  const [comparedUser, setComparedUser] = useState({});
  const currentUser = user;
  const comparedUserName = friend;
  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProfile?name=${comparedUserName}`)
      .then((response) => {
        setComparedUser(response.data);
      })
      .catch((error) => {
        console.log('error fetching friend: ', error);
      });
  });

  const columns = [
    { id: 'currentUserScores', label: `${currentUser.name}`, minWidth: 170 },
    { id: 'quizName', label: 'Quiz Name', minWidth: 190 },
    { id: 'comparedUserScores', label: `${comparedUserName}`, minWidth: 170 },
  ];

  const rows = [];

  function createData(currentResults, comparedResults) {
    currentResults.map((score) => {
      comparedResults.map((item) => {
        if (score.quizName === item.quizName) {
          rows.push({ currentUserScores: score.score, quizName: score.quizName, comparedUserScores: item.score });
        }
      });
    });
  }

  createData(currentUser.results, comparedUser.results);

  const useStyles = makeStyles({
    root: {
      width: '100%'
    },
    container: {
      maxHeight: 440
    }
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
            {rows.slice().map((row) => {
              return (
                <TableRow key={uuidv4()} hover role="checkbox" tabIndex={-1} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={uuidv4()} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}