import React from 'react';
import Grid from '@material-ui/core/Grid';


const ExperienceItem = ({ experienceItem }) => {
  return (
    <Grid
      item
    >
      <h3>{`${experienceItem.start_year} - ${experienceItem.end_year}`}</h3>
      <h3>{experienceItem.company}</h3>
      <h4>{experienceItem.position_title}</h4>
      <h5>{experienceItem.description}</h5>
    </Grid>
  )
}

export default ExperienceItem;
