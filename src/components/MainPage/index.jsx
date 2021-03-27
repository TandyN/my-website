import React from 'react';
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
} from '@material-ui/core';

import MainPageTop from './MainPageTop';
import MainPageBottom from './MainPageBottom';

const useStyles = makeStyles({
  mainPage: {
    height: '100vh',
    padding: 10,
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
          <MainPageBottom />
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
          <MainPageBottom />
        </Grid>
      </Hidden>
    </Box>
  )
}

export default MainPage;
