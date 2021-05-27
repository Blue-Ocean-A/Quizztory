/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import {
  Grid, Container, Typography, TextField, Button, Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSignup from './GoogleSignup.jsx';

const useStyles = makeStyles((theme) => ({
  login: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 16,
  },
  input: {
    backgroundColor: theme.palette.primary.light,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    color: theme.palette.primary.light,
  },
  text: {
    paddingTop: 15,
    color: theme.palette.primary.light,
  },
}));

const SignUp = ({
  setDisplay, setCurrentUser, userName, setUserName, password, setPassword,
}) => {
  const classes = useStyles();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    axios.post('http://3.143.204.61/api/userProfile', {
      name: userName,
      password,
    })
      .then(() => {
        setCurrentUser(userName);
        setDisplay('home');
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Container className={classes.login} maxWidth="xs">
      <div>
        <Typography component="h3" variant="h3" className={classes.text}>
          Sign Up
        </Typography>
        <form noValidate>
          <TextField
            className={classes.input}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleUserName}
          />
          <TextField
            className={classes.input}
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassword}
          />
          <Button
            className={classes.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            onClick={submit}
          >
            Join
          </Button>
          <GoogleSignup setDisplay={setDisplay} setCurrentUser={setCurrentUser} />
          <Grid container style={{ marginTop: 10 }}>
            <Grid item style={{ marginBottom: 10 }}>
              <Link className={classes.link} href="#" variant="body2" onClick={() => setDisplay('login')}>
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
