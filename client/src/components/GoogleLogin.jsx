/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import { useGoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import image from '../../../btn_google_signin_light_normal_web.png';
// refresh token
import refreshTokenSetup from '../utils/refreshToken.js';

const clientId = '92870217008-h9091it2nl99pja28dl9rfa5lpecdeng.apps.googleusercontent.com';

function GoogleLogin({ setDisplay, setCurrentUser }) {
  const onSuccess = (res) => {
    axios.post('/api/userProfile', {
      name: res.profileObj.name,
      password: res.profileObj.googleId,
    })
      .then(() => {
        axios.get(`/api/user?name=${res.profileObj.name}&password=${res.profileObj.googleId}`)
          .then((response) => {
            setCurrentUser(response.data[0].name);
            setDisplay('home');
            refreshTokenSetup(res);
          });
      })
      .catch((error) => {
        console.log('Error signing up: ', error);
      });
  };

  const onFailure = () => {
    alert(
      'Failed to login.',
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Button
      className="button"
      type="submit"
      fullWidth
      style={{ marginTop: 10 }}
      onClick={signIn}
    >
      <img src={image} alt="google login" className="icon" />
    </Button>
  );
}

export default GoogleLogin;
