/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container, Typography, Modal, TextField,
} from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';
import { v4 as uuidv4 } from 'uuid';

import Friend from './Friend.jsx';
import Score from './Score.jsx';
import FriendRequest from './FriendRequest.jsx';
import StickyHeadTable from './FriendsResults.jsx';

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
  const [incoming, setIncoming] = useState(['sdfsd']);
  const [outgoing, setOutgoing] = useState([]);
  const [clickedFriend, setClickedFriend] = useState([]);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [average, setAverage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const calculateAverageScore = () => {
    let total = 0;
    results.forEach((result) => {
      total += Number(result.score);
    });
    setAverage(total / results.length);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const userNames = [];
  const getAllUsers = () => {
    axios.get('/api/allUsers')
      .then((res) => {
        setAllUsers(res.data.map((user) => user.name));
      });
  };

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  const sendRequest = () => {
    if (!allUsers.includes(search)) {
      alert('No user found by that name!');
      return;
    }
    axios.put('/api/userProfile/request', {
      requester: currentUser,
      requestee: search,
    })
      .then(() => {
        alert(`Friend request sent to ${search}`);
      });
  };

  const getUserInfo = () => {
    axios.get(`/api/userProfile?name=${currentUser}`)
      .then((res) => {
        setUser(res.data[0]);
        setResults(res.data[0].results);
        setFriends(res.data[0].friends);
        setIncoming(res.data[0].incoming);
        setOutgoing(res.data[0].outgoing);
        setLoaded(true);
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

  const handleFriendClick = (e) => {
    setClickedFriend(e.target.outerText);
    setOpen(true);
  };

  const onSearch = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    getUserInfo();
    getAllUsers();
    calculateAverageScore();
  }, [loaded]);

  return (
    <>
      <Score average={average} results={results} />
      <Container component={Paper} className={classes.container}>
        <div>
          <Typography variant="h3" onClick={handleFriendClick}>
            FRIENDS
          </Typography>
        </div>
        {incoming.length ? (
          <FriendRequest
            request={incoming[0]}
            handleAcceptClick={handleAcceptClick}
            handleDenyClick={handleDenyClick}
          />
        ) : null}
        <div className={classes.fullList}>
          {friends.map((friend) => (
            <div key={uuidv4()}>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <StickyHeadTable
                  user={user}
                  friend={clickedFriend}
                />
              </Modal>
              <Friend
                key={uuidv4()}
                name={friend}
                onClick={handleOpen}
                handleFriendClick={handleFriendClick}
              />
            </div>
          ))}
        </div>
        <SearchBar
          placeholder="Find New"
          className={classes.searchBar}
          onChange={handleSearchChange}
          onRequestSearch={sendRequest}
        />
      </Container>
    </>
  );
}
