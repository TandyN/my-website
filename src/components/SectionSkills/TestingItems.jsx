import React from 'react';
import Grid from '@material-ui/core/Grid';

const testingList = [
  'Jest',
  'Enzyme',
  'SuperTest',
  'k6',
  'Loader.io',
];

const TestingItems = () => {
  return (
    <Grid 
      container
      spacing={4}
    >
      {testingList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
    </Grid>
  )
}

export default TestingItems;
