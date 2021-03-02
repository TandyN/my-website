import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExperienceHeader from './ExperienceHeader';
import ExperienceItem from './ExperienceItem';

import experienceData from './experience.json';

const SectionExperience = () => {
  return (
    <Grid
      container
      direction='column'
    >
      <ExperienceHeader />
      <Box>
        {experienceData.map((experienceItem, index) => {
          return (
            <ExperienceItem experienceItem={experienceItem} key={index} />
          )
        })}
      </Box>
    </Grid>
  )
}

export default SectionExperience;
