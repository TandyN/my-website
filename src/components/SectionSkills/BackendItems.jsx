import React from 'react';
import Grid from '@material-ui/core/Grid';

const backendList = [
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Couchbase',
  'Redis'
];

const BackendItems = () => {
  return (
    <Grid 
      container
      spacing={4}
    >
      {backendList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
    </Grid>
  )
}

export default BackendItems;
