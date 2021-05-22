import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Score = () => (
  <Box justifyContent="right">
    <Typography component="h1" variant="h2" align="center" color="primary">98%</Typography>
    <Typography component="h5" variant="h2" color="primary">Your Quizztory Score</Typography>
  </Box>
);

export default Score;
