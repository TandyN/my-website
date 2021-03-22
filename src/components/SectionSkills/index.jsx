import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  },
  grid: {
    height: '100%',
  }
}));

const SectionSkills = () => {
  const styledSkillsWrapperClass = styledSkillsWrapper();

  return (
    <Paper
      elevation={5}
      className={styledSkillsWrapperClass.root}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        className={styledSkillsWrapperClass.grid}
      >
        <h2 >Skills</h2>
        <SkillsCategories />
      </Grid>
    </Paper>
  )
}

export default SectionSkills;
