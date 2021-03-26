import React from 'react';
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
} from '@material-ui/core';

import MainPageTop from './MainPageTop';

const useStyles = makeStyles({
  mainPage: {
    height: '100vh',
  },
});

const MainPage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Hidden smDown>
        <Grid
          container
          className={classes.mainPage}
          direction='column'
          justify='center'
        >
          <MainPageTop />
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          className={classes.mainPage}
          direction='column'
          justify='space-between'
        >
          <MainPageTop />
        </Grid>
      </Hidden>
    </Box>
  )
}

export default MainPage;
