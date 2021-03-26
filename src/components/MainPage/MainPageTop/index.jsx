import React from 'react';
import { Grid } from '@material-ui/core';

import MainPageDescription from './MainPageDescription';
import MainPageButtons from './MainPageButtons';

const MainPageTop = () => {
  return (
    <Grid
      container
      direction='column'
    >
      <MainPageDescription />
      <MainPageButtons />
    </Grid>
  )
}

export default MainPageTop;
