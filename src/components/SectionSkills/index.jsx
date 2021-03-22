import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SkillsCategories from './SkillsCategories';

import backgroundSkills from '../../../images/skills-background.png';

const styledSkillsWrapper = makeStyles((theme) => ({
  root: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundSkills})`,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `none`,
      backgroundColor: '#333b50',
      height: '60%',
    },
  }
}));

const SectionSkills = () => {
  const styledSkillsWrapperClass = styledSkillsWrapper();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-evenly"
      className={styledSkillsWrapperClass.root}
    >
      <h2 >Skills</h2>
      <SkillsCategories />
    </Grid>
  )
}

export default SectionSkills;
