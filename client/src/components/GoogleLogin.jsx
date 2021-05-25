/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import image from '../../../btn_google_signin_light_normal_web.png';
// refresh token
import refreshTokenSetup from '../utils/refreshToken.js';

const clientId = '92870217008-h9091it2nl99pja28dl9rfa5lpecdeng.apps.googleusercontent.com';

function GoogleLogin({ setDisplay }) {
  const onSuccess = (res) => {
    setDisplay('home');
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name}.`,
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
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
    <Button onClick={signIn} className="button">
      <img src={image} alt="google login" className="icon" />
    </Button>
  );
}

export default GoogleLogin;
