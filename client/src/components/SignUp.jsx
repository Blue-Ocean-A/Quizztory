/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Grid, Container, Typography, TextField, Button, Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 16,
  },
  input: {
    backgroundColor: theme.palette.primary.light,
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
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
        <Typography component="h1" variant="h5" style={{ marginTop: 15 }}>
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
          <Grid container style={{ marginTop: 10 }}>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setDisplay('login')}>
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
