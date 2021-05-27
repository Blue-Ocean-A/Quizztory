/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container, Typography, Modal,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';
import { v4 as uuidv4 } from 'uuid';
import Friend from './Friend.jsx';
import Score from './Score.jsx';
import FriendRequest from './FriendRequest.jsx';
import FriendsResults from './FriendsResults.jsx';

const useStyles = makeStyles((theme) => ({
  scoreContainer: {
    margin: '0 50 0 50px',
  },
  container: {
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    height: '25rem',
    textAlign: 'center',
    padding: '10px',
    margin: '20 50 50 50px',
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
  // eslint-disable-next-line no-unused-vars
  const [outgoing, setOutgoing] = useState([]);
  const [clickedFriend, setClickedFriend] = useState([]);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [average, setAverage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const calculateAverageScore = () => {
    let total = 0;
    results.forEach((result) => {
      total += Number(result.score);
    });
    if (total === 0) {
      setAverage(0);
      return;
    }
    if (total) {
      setAverage((total / results.length).toFixed());
    } else {
      setAverage('-');
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getAllUsers = () => {
    axios.get('/api/allUsers')
      .then((res) => {
        setAllUsers(res.data.map((resUser) => resUser.name));
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
        throw err;
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
        throw err;
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
        throw err;
      });
  };

  const handleFriendClick = (e) => {
    setClickedFriend(e.target.outerText);
    setOpen(true);
  };

  useEffect(() => {
    getUserInfo();
    getAllUsers();
    calculateAverageScore();
  }, [loaded]);

  return (
    <>
      <Container className={classes.scoreContainer}>
        <Score average={average} results={results} currentUser={currentUser} />
      </Container>
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
            <div key={uuidv4()} id="modal-div">
              <Modal
                open={open}
                onClose={handleClose}
              >
                <FriendsResults
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
