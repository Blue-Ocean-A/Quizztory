import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

export default function Friends({ currentUser }) {
  const classes = useStyles();

  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState(['']);
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
    if (searchValue.length > 2) {
      axios.get();
    }
  };

  const getUserInfo = () => {
    axios.get(`/api/userProfile?name=${currentUser}`)
      .then((res) => {
        setFriends(res.data[0].friends);
        // setIncoming(res.data[0].incoming);
        setOutgoing(res.data[0].outgoing);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };

  const handleAcceptClick = () => {
    axios.put('/api/userProfile/accept', {
      requester: incoming[0],
      requestee: currentUser,
    })
      .then(() => {
        friends.push(incoming[0]);
        const incomingRequests = incoming.slice(1);
        setIncoming(incomingRequests);
      })
      .catch((err) => {
        console.log('err accept incoming req:', err);
      });
  };

  const handleDenyClick = () => {
    axios.put(('/api/userProfile/deny'), {
      requester: incoming[0],
      requestee: currentUser,
    })
      .then(() => {
        const incomingRequests = incoming.slice(1);
        setIncoming(incomingRequests);
      })
      .catch((err) => {
        console.log('err denying req', err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
        {incoming.length ? (
          <>
            <FriendRequest
              request={incoming[0]}
              handleAcceptClick={handleAcceptClick}
              handleDenyClick={handleDenyClick}
            />
            <div className={classes.fullList}>
              {friends.map((friend, index) => <Friend key={index} name={friend} />)}
            </div>
          </>
        ) : (
          <div className={classes.fullList}>
            {friends.map((friend, index) => <Friend key={index} name={friend} />)}
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
