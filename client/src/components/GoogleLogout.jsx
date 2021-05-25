/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '92870217008-h9091it2nl99pja28dl9rfa5lpecdeng.apps.googleusercontent.com';

function Logout({ setDisplay }) {
  const onSuccess = () => {
    setDisplay('login');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
