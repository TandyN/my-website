import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
      alignItems="center"
      justify="center"
      direction="column"
      >
      <Grid item className={gridCategoryClass.root} >
        <Button>Frontend</Button>
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button>Backend</Button>
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button>Databases</Button>
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button>Testing</Button>
      </Grid>
    </Grid>
  )
}

export default SectionSkills;
