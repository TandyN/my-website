import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExperienceItem from './ExperienceItem';

import experienceData from './experience.json'; 

const SectionExperience = () => {
  return (
    <Grid 
      container
      alignItems='center'
      direction='column'
    >
      <h2>Experience</h2>
      {experienceData.map((experienceItem) => {
        return (
          <ExperienceItem experienceItem={experienceItem} />
        )
      })}
    </Grid>
  )
}

export default SectionExperience;
