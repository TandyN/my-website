import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const ExperienceListLarge = ({ experienceData }) => {
  return (
    <Hidden smDown>
      <Grid
        container
        direction="column"
        justify="space-evenly"
      >
        {experienceData.map((experienceItem, index) => {
          return (
            <Grid
              item
              key={index}
            >
              <h3>{`${experienceItem.start_year} - ${experienceItem.end_year}`}</h3>
              <h3>{experienceItem.company}</h3>
              <h4>{experienceItem.position_title}</h4>
              <h5>{experienceItem.description}</h5>
            </Grid>
          )
        })}
      </Grid>
    </Hidden>
  )
}

export default ExperienceListLarge;
