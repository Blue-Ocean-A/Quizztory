import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

export default function Friend({ name }) {
  return (
    <Typography>
      {name}
    </Typography>
  );
}
