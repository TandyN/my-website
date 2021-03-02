import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceHeader from './ExperienceHeader';
import ExperienceItem from './ExperienceItem';

import experienceData from './experience.json';

const experienceItemsContainer = makeStyles({
  root: {
    margin: 'auto',
    width: '50%',
  },
});

const SectionExperience = () => {
  const experienceItemsContainerClass = experienceItemsContainer();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={experienceItemsContainerClass.root}
    >
      <ExperienceHeader />
      <Grid
        container
        direction="column"
        justify="space-evenly"
      >
        {experienceData.map((experienceItem, index) => {
          return (
            <ExperienceItem experienceItem={experienceItem} key={index} />
          )
        })}
      </Grid>
    </Grid>
  )
}

export default SectionExperience;
