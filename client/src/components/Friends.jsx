import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';

import Friend from './Friend.jsx';
import Score from './Score.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    padding: '10px',
  },
  searchBar: {
    backgroundColor: theme.palette.primary.light,
  },
  list: {
    margin: '10px',
    height: '90%',
    overflow: 'scroll',
  },

}));

export default function Friends() {
  const classes = useStyles();

  const [friends, setFriends] = useState(['Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew', 'Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew', 'Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew', 'Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew', 'Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew', 'Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew', 'Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew']);
  const [search, setSearch] = useState(['']);

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <>
    <Container>
      <Score />
    </Container>
    <Container component={Paper} className={classes.container}>
      <div>
        <Typography variant="h3">
          FRIENDS
        </Typography>
      </div>
      <div className={classes.list}>
        {friends.sort().map((friend, index) => <Friend key={index} name={friend} />)}
      </div>
      <SearchBar
        className={classes.searchBar}
        onChange={handleSearchChange}
      />
    </Container>
    </>
  );
}
