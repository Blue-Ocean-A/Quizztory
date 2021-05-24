import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';

import Friend from './Friend.jsx';
import Score from './Score.jsx';
import FriendRequest from './FriendRequest.jsx';

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
  fullList: {
    margin: '10px',
    height: '90%',
    overflow: 'scroll',
  },
  partialList: {
    margin: '50 10 10 10',
    height: '50%',
    overflow: 'scroll',
  },
}));

export default function Friends() {
  const classes = useStyles();

  const [friends, setFriends] = useState(['Jenna', 'Tamir', 'Kim', 'Julian', 'Matthew']);
  const [search, setSearch] = useState(['']);
  const [pending, setPending] = useState(['Esteban', 'Bob', 'Sara']);

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  const handleAcceptClick = () => {
    friends.push(pending[0]);
    const pendingRequests = pending.slice(1);
    setPending(pendingRequests);
    // console.log(pending.length);
  };

  const handleDenyClick = () => {
    const pendingRequests = pending.slice(1);
    setPending(pendingRequests);
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
        {pending.length ? (
          <>
            <FriendRequest
              request={pending[0]}
              handleAcceptClick={handleAcceptClick}
              handleDenyClick={handleDenyClick}
            />
            <div className={classes.fullList}>
              {friends.sort().map((friend, index) => <Friend key={index} name={friend} />)}
            </div>
          </>
        ) : (
          <div className={classes.fullList}>
            {friends.sort().map((friend, index) => <Friend key={index} name={friend} />)}
          </div>
        )}
        <SearchBar
          placeholder="Find New"
          className={classes.searchBar}
          onChange={handleSearchChange}
        />
      </Container>
    </>
  );
}
