import React from 'react';
import {
  Typography, ButtonGroup, Button, makeStyles, Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textAlign: 'center',
}));

export default function FriendRequest({ request }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes} border={1} borderRadius={10} borderColor="primary.main" padding={1} margin={1}>
        <Typography variant="h4">
          {request}
        </Typography>
        {' '}
        would like to be your Friend!
        <ButtonGroup>
          <Button>Accept</Button>
          <Button>Deny</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
