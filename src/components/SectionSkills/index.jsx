import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SkillsCategories from './SkillsCategories';

const styledSkillsWrapper = makeStyles({
  root: {
    height: '60%',
  }
});


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
      <SkillsCategories />
    </Grid>
  )
}

export default SectionSkills;
