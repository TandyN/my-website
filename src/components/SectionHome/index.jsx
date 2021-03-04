import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeAboutMe from './HomeAboutMe';
import HomePicture from './HomePicture';

const SectionHome = () => {
  return (
    <Grid
      container
      justify="center"
    >
      <HomePicture />
      <HomeAboutMe />
    </Grid>
  )
}

export default SectionHome;
