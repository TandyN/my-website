import React from 'react';
import { Grid } from '@material-ui/core';

import MainPageProjectSection from './MainPageProjectSection';
import projects from './projects.json';

const MainPageBottom = () => {
  return (
    <Grid
      container
    >
      <MainPageProjectSection projects={projects} />
    </Grid>
  )
}

export default MainPageBottom;
