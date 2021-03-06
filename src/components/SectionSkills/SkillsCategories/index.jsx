import React from 'react';
import Grid from '@material-ui/core/Grid';
import CategoryFrontEnd from './CategoryFrontEnd';
import CategoryBackend from './CategoryBackend';
import CategoryTesting from './CategoryTesting';
import CategoryDevelopment from './CategoryDevelopment';

const SkillsCategories = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems='center'
      direction='column'
    >
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
