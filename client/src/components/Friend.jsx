import React from 'react';
import { Typography } from '@material-ui/core';

export default function Friend({ name, handleFriendClick }) {
  return (
    <Typography
      style={{ fontFamily: 'Montserrat' }}
      onClick={handleFriendClick}
    >
      {name}
    </Typography>
  );
}
