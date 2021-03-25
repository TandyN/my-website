import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';

import MainPage from './MainPage';

const useStyles = makeStyles({
  app: {
    margin: 'auto',
    maxWidth: '900px',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.app}
      direction='column'
    >
      <MainPage />
    </Grid>
  )
}

export default App;
