/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Grid, Container, Typography, TextField, Button, Link,
} from '@material-ui/core';

const Login = ({ setDisplay, setCurrentUser }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const submit = () => {
    // set current user
    setCurrentUser(userName);
    // switch display to home page
    setDisplay('home');
  };

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
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
            variant="outlined"
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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
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
