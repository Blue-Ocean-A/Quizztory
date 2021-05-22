/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Grid, Container, Typography, TextField, Button, Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    backgroundColor: theme.palette.secondary.dark,
  },
  input: {
    backgroundColor: theme.palette.primary.light,
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const Login = ({ setDisplay, setCurrentUser }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const submit = () => {
    if (userName !== '' && password !== '') {
      // set current user
      setCurrentUser(userName);
      // switch display to home page
      setDisplay('home');
    }
  };

  return (
    <Container className={classes.login} maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign in
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
            onClick={submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                Sign up for an account
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
