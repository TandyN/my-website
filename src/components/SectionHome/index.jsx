import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeAboutMeSmall from './HomeAboutMeSmall';
import HomeAboutMeLarge from './HomeAboutMeLarge';
import HomePicture from './HomePicture';

import backgroundHome from '../../../images/home-background.png';

const styledHomeWrapper = makeStyles((theme) => ({
  root: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundHome})`,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `none`,
      backgroundColor: '#1d1d1b',
    },
  }
}));

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
