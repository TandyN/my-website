import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';

import MainPageDescription from './MainPageDescription';

const useStyles = makeStyles({
  mainPage: {
    height: '100vh',
  },
});

const MainPage = () => {
  const classes = useStyles();

  return (
      <Grid
        container
        className={classes.mainPage}
        direction='column'
        justify='center'
      >
        <MainPageDescription />
      </Grid>
  )
}

export default MainPage;
