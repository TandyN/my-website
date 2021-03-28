import React from 'react';
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
} from '@material-ui/core';

import MainPageTop from './MainPageTop';
import MainPageBottom from './MainPageBottom';

const useStyles = makeStyles((theme) => ({
  mainPage: {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '100vh',
    padding: 10,
    [theme.breakpoints.up('md')]: {
      height: '100%',
      minHeight: '100vh',
    }
  },
}));

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
