import React from 'react';
import {
  Grid,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';

import MainPageDescription from './MainPageDescription';

const useStyles = makeStyles({
  mainPage: {
    height: '100vh',
  },
});

const MainPage = () => {
  const isScreenMedium = useMediaQuery('(min-width:960px)');
  const classes = useStyles();

  return (
      <Grid
        container
        className={classes.mainPage}
        direction='column'
        justify={(isScreenMedium) ? 'center' : 'space-between'}
      >
        <MainPageDescription />
      </Grid>
  )
}

export default MainPage;
