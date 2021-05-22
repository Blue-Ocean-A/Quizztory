import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Score = () => (
  <Box justifyContent="right">
    <Typography component="h1" variant="h3">98%</Typography>
    <Typography component="h5" variant="h5">Your Quizztory Score</Typography>
  </Box>
);

export default Score;
