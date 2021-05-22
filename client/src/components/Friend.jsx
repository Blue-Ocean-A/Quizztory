import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export default function Friend({ name }) {
  return (
    <div>
      {name}
    </div>
  );
}
