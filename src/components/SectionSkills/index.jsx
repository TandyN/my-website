import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FrontendItems from './FrontendItems';
import BackendItems from './BackendItems';
import TestingItems from './TestingItems';
import DevelopmentItems from './DevelopmentItems';

const gridCategory = makeStyles({
  root: {
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
    >
      <h2>Skills</h2>
      <Grid item className={gridCategoryClass.root} >
        <Button>Frontend</Button>
        <FrontendItems />
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button>Backend</Button>
        <BackendItems />
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button>Testing</Button>
        <TestingItems />
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button>Development</Button>
        <DevelopmentItems />
      </Grid>
    </Grid>
  )
}

export default SectionSkills;
