import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceListSmall from './ExperienceListSmall';
import ExperienceListLarge from './ExperienceListLarge';

import backgroundExperiences from '../../../images/experience-background.png';
import experienceData from './experience.json';

const experienceItemsContainer = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundExperiences})`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#1d1d1b',
    height: '100%',
    justifyContent: 'space-evenly',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none',
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
      <h2>Experience</h2>
      <ExperienceListLarge experienceData={experienceData} />
      <ExperienceListSmall experienceData={experienceData} />
    </Grid>
  )
}

export default SectionExperience;
