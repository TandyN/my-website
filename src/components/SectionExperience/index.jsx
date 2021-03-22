import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceHeader from './ExperienceHeader';
import ExperienceListSmall from './ExperienceListSmall';
import ExperienceListLarge from './ExperienceListLarge';

import experienceData from './experience.json';

const experienceItemsContainer = makeStyles({
  root: {
    height: '75%',
    justifyContent: 'space-evenly',
    margin: 'auto',
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
      <ExperienceListLarge experienceData={experienceData} />
      <ExperienceListSmall experienceData={experienceData} />
    </Grid>
  )
}

export default SectionExperience;
