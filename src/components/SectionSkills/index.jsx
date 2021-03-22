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
    height: '60%',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `none`,
      backgroundColor: '#1d1d1b',
    },
  }
}));

const styledSkillsHeader = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${backgroundSkills})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '200px',
    },
  },
  text: {
    textAlign: 'center',
  }
}));


const SectionSkills = () => {
  const styledSkillsWrapperClass = styledSkillsWrapper();
  const styledSkillsHeaderClass = styledSkillsHeader();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-evenly"
      className={styledSkillsWrapperClass.root}
    >
      <div className={styledSkillsHeaderClass.root}>
        <h2 className={styledSkillsHeaderClass.text}>Skills</h2>
      </div>
      <SkillsCategories />
    </Grid>
  )
}

export default SectionSkills;
