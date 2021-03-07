import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeAboutMeSmall from './HomeAboutMeSmall';
import HomeAboutMeLarge from './HomeAboutMeLarge';
import HomePicture from './HomePicture';

const styledHomeWrapper = makeStyles({
  root: {
    height: '100%',
  }
});

const SectionHome = () => {
  const styledHomeWrapperClass = styledHomeWrapper();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={styledHomeWrapperClass.root}
    >
      <Grid
        container
        justify="center"
      >
        <HomePicture />
        <HomeAboutMeSmall />
        <HomeAboutMeLarge />
      </Grid>
    </Grid>
  )
}

export default SectionHome;
