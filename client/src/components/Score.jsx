import React from 'react';
import { Typography, Container } from '@material-ui/core/';

const styles = {
  container: {
    marginTop: '-10px',
    textAlign: 'center',
  },
  text: {
    marginTop: '-10px',
  },
};

export default function Score() {
  return (
    <div style={styles.container}>
      <Typography variant="h1" color="primary">
        92%
      </Typography>
      <Typography variant="body1" color="primary" style={styles.text}>
        Your Average Score
      </Typography>
    </div>
  );
}
