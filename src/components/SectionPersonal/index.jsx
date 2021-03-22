import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styledPersonalSectionWrapper = makeStyles({
  root: {
    backgroundColor: '#fff',
    height: '50%',
  }
});

const SectionPersonal = () => {
  const styledPersonalSectionWrapperClass = styledPersonalSectionWrapper();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-evenly"
      className={styledPersonalSectionWrapperClass.root}
    >
      <h2>Personal</h2>
      <p>Description</p>
    </Grid>
  )
}

export default SectionPersonal;
