import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Container, Paper, Modal, Button,
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
    marginTop: '20%',
    margin: '0 auto',
    width: 370,
    backgroundColor: theme.palette.primary.main,
    border: '1px solid #333333',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    marginTop: '-10px',
    textAlign: 'center',
  },
  text: {
    marginTop: '-10px',
  },
  modalText: {
    color: theme.palette.primary.light,
  },
}));

export default function Score({ average }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [score, setScore] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={modalStyle}
      className={classes.paper}
    >
      <Button className={classes.modalText} onClick={handleClose}>Back</Button>
    </div>
  );

  return (
    <div role="button" className={classes.container}>
      <Typography variant="h1" color="primary" onClick={handleOpen}>
        {average + "%"}
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
