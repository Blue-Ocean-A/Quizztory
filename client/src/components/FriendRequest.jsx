import React from 'react';
import {
  Typography, ButtonGroup, Button, makeStyles, Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  display: 'flex',
  justifyContent: 'center',
  // textAlign: 'center',
}));

export default function FriendRequest({ request, handleAcceptClick, handleDenyClick }) {
  const classes = useStyles();
  return (
    <>
      <Box
        border={1}
        borderLeft={0}
        borderRight={0}
        borderColor="primary.main"
        padding={1}
        margin={1}
        style={{margin: 'auto'}}
      >
        <Typography variant="h4">
          {request.toUpperCase()}
        </Typography>
        <Typography variant="h5">
          would like to be your friend!
        </Typography>
        <ButtonGroup>
          <Button onClick={handleAcceptClick}>Accept</Button>
          <Button onClick={handleDenyClick}>Deny</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
