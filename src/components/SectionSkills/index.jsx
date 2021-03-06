import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FrontendItems from './FrontendItems';
import BackendItems from './BackendItems';
import TestingItems from './TestingItems';
import DevelopmentItems from './DevelopmentItems';

const gridCategory = makeStyles({
  root: {
    margin: 'auto',
    width: '50%',
  },
});

const SectionSkills = () => {
  const gridCategoryClass = gridCategory();

  return (
    <Grid
      container
      spacing={0}
      alignItems='center'
      direction='column'
      className={gridCategoryClass.root}
    >
      <h2>Skills</h2>
      <Grid item >
        <FrontendItems />
        <BackendItems />
        <TestingItems />
        <DevelopmentItems />
      </Grid>
    </Grid>
  )
}

export default SectionSkills;
