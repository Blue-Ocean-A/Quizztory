import React, { useState } from 'react';
import { Typography, Container } from '@material-ui/core/';
import Results from './Results.jsx';

const styles = {
  container: {
    marginTop: '-10px',
    textAlign: 'center',
  },
  text: {
    marginTop: '-10px',
  },
};

const handleScoreClick = () => {
  setClicked(true);
};

export default function Score() {
  const [clicked, setClicked] = useState(false);
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
