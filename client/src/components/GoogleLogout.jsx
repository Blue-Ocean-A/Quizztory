/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Button } from '@material-ui/core';

const clientId = '92870217008-h9091it2nl99pja28dl9rfa5lpecdeng.apps.googleusercontent.com';

function Logout({
  setDisplay, setCurrentUser, setUserName, setPassword,
}) {
  const onLogoutSuccess = () => {
    setDisplay('login');
    setCurrentUser();
    setUserName('');
    setPassword('');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });

  return (
    <Button onClick={signOut} className="button" type="submit">
      Logout
    </Button>
  );
}

export default Logout;
