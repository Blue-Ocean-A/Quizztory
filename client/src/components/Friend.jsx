import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

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
