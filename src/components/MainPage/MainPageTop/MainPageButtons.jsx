import React from 'react';
import { Grid } from '@material-ui/core';
import MainPageButtonItem from './MainPageButtonItem';

const MainPageButtons = () => {
  return (
    <Grid
      container
      spacing={1}
    >
      <MainPageButtonItem description='LinkedIn' link='https://www.linkedin.com/in/tandyn' />
      <MainPageButtonItem description='GitHub' link='https://github.com/tandyn' />
      <MainPageButtonItem description='CV' link='' />
    </Grid>
  )
}

export default MainPageButtons;
