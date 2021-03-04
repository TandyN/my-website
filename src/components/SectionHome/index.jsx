import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeAboutMeSmall from './HomeAboutMeSmall';
import HomeAboutMeLarge from './HomeAboutMeLarge';
import HomePicture from './HomePicture';

const styledWrapper = makeStyles({
  root: {
    height: '100%',
  }
});

const SectionHome = () => {
  const styledWrapperClass = styledWrapper();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={styledWrapperClass.root}
    >
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <HomePicture />
        <HomeAboutMeSmall />
        <HomeAboutMeLarge />
      </Grid>
    </Grid>
  )
}

export default SectionHome;
