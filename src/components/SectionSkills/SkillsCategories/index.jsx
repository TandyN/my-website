import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CategoryFrontEnd from './CategoryFrontEnd';
import CategoryBackend from './CategoryBackend';
import CategoryTesting from './CategoryTesting';
import CategoryDevelopment from './CategoryDevelopment';

const gridCategory = makeStyles({
  root: {
    margin: 'auto',
    width: '50%',
  },
});

const SkillsCategories = () => {
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
        <CategoryFrontEnd />
        <CategoryBackend />
        <CategoryTesting />
        <CategoryDevelopment />
      </Grid>
    </Grid>
  )
}

export default SkillsCategories;
