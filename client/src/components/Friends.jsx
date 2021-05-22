import React, { useState } from 'react';
import { ThemeProvider, makeStyles, Button } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Friend from './Friend.jsx';

export default function Friends() {
  const [friends, setFriends] = useState(['1', '2']);
  return (
    <Grid container>
      {friends.map((friend) => <Friend name={friend} />)}
    </Grid>
  );
}
