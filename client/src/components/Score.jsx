import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Container, Paper, Modal, Grid,
} from '@material-ui/core/';

function getModalStyle() {
  return {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    outline: 0,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '5%',
    margin: '0 auto',
    backgroundColor: theme.palette.primary.main,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
  },
  text: {
    marginTop: '-10px',
  },
  modalText: {
    textAlign: 'center',
    color: theme.palette.primary.light,
    height: '60vh',
  },
  scores: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
  },
}));

export default function Score({ average, results }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

  });

  const body = (
    <Container
      component={Paper}
      style={modalStyle}
      className={classes.paper}
    >
      <Grid container component={Paper} spacing={1} className={classes.container}>
        <Grid item xs={5}>
          <Typography variant="h1">
            {`${average}%`}
          </Typography>
          <Typography variant="h3">
            Your average Quizztory score
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {results.map((result) => (
            <Container className={classes.scores}>
              <Grid container xs={12}>
                <Grid item xs={8} style={{ textAlign: 'left' }}>
                  <Typography variant="h4">
                    Quiz:
                    {' '}
                    {result.quizName}
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                  <Typography variant="h4">
                    Score:
                    {' '}
                    {`${result.score}%`}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          ))}
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <div role="button" style={{ textAlign: 'center' }}>
      <Typography variant="h1" color="primary" onClick={handleOpen}>
        {`${average}%`}
      </Typography>
      <Typography variant="body1" color="primary" className={classes.text} onClick={handleOpen}>
        Your Average Score
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
