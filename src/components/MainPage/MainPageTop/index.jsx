import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';

import MainPageDescription from './MainPageDescription';
import MainPageButtons from './MainPageButtons';

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('md')]: {
      marginBottom: 30,
    },
  },
}));

const MainPageTop = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.section}
      direction='column'
    >
      <MainPageDescription />
      <MainPageButtons />
    </Grid>
  )
}

export default MainPageTop;
