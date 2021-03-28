import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import MainPageButtonItem from './MainPageButtonItem';

const useStyles = makeStyles({
  main: {
    marginBottom: 10,
  }
});

const MainPageButtons = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.main}
      spacing={1}
    >
      <MainPageButtonItem description='LinkedIn' link='https://www.linkedin.com/in/tandyn' />
      <MainPageButtonItem description='GitHub' link='https://github.com/tandyn' />
      <MainPageButtonItem description='CV' link='' />
    </Grid>
  )
}

export default MainPageButtons;
