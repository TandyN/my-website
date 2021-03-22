import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceListSmall from './ExperienceListSmall';
import ExperienceListLarge from './ExperienceListLarge';

import experienceData from './experience.json';

const experienceItemsContainer = makeStyles((theme) => ({
  root: {
    height: '75%',
    justifyContent: 'space-evenly',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#51586b',
      height: '60%',
    },
  },
}));

const SectionExperience = () => {
  const experienceItemsContainerClass = experienceItemsContainer();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={experienceItemsContainerClass.root}
    >
      <ExperienceListLarge experienceData={experienceData} />
      <ExperienceListSmall experienceData={experienceData} />
    </Grid>
  )
}

export default SectionExperience;
