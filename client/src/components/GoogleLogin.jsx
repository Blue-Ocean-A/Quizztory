/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */
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
    alert(
      `Logged in successfully welcome ${res.profileObj.name}.`,
    );
    refreshTokenSetup(res);
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
