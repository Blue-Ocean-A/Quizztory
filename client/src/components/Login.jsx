/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Grid, Container, Typography, TextField, Button, Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 16,
  },
  input: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
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

const Login = ({
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
        <Typography component="h3" variant="h3" className={classes.text}>
          Login
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
            Login
          </Button>
          <Grid container style={{ marginTop: 10 }}>
            <Grid item>
              <Link className={classes.link} href="#" variant="body2" onClick={() => setDisplay('signUp')}>
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
