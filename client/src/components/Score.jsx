/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Container, Paper, Modal, Grid,
} from '@material-ui/core/';
import { v4 as uuidv4 } from 'uuid';

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
    maxHeight: '60%',
  },
  container: {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    overflowX: 'scroll',
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

export default function Score({ average, results, currentUser }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Container
      component={Paper}
      style={modalStyle}
      className={classes.paper}
    >
      <Grid container component={Paper} className={classes.container}>
        <Grid item xs={8}>
          <Typography variant="h1">
            {`${average}%`}
          </Typography>
          <Typography variant="h3">
            {`${currentUser}'s`}
            {' '}
            average Quizztory score
          </Typography>
        </Grid>
        <Grid item xs={8} style={{ margin: '20px' }}>
          {results.map((result) => (
            <Container key={uuidv4()} className={classes.scores} style={{ margin: '5px', padding: '8 8', height: '30px' }}>
              <Grid container>
                <Grid item xs={8} style={{ textAlign: 'left' }}>
                  <Typography variant="h4">
                    {' '}
                    {result.quizName}
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                  <Typography variant="h4">
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
      {average !== '-'
        ? (
          <Typography variant="body1" color="primary" className={classes.text} onClick={handleOpen}>
            {`${currentUser}'s`}
            {' '}
            average score
          </Typography>
        )
        : (
          <Typography variant="body1" color="primary" className={classes}>
            Take your first quiz!
          </Typography>
        )}
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
