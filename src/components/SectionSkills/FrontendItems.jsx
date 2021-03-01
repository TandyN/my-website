import React from 'react';
import Grid from '@material-ui/core/Grid';

const frontendList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'styled-components',
  'Material-UI'
];

const FrontendItems = () => {
  return (
    <Grid 
      container
      spacing={4}
    >
      {frontendList.map((value) => {
        return (
          <Grid item>{value}</Grid>
        )
      })}
    </Grid>
  )
}

export default FrontendItems;
