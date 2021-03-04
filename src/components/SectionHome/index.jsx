import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeAboutMeSmall from './HomeAboutMeSmall';
import HomeAboutMeLarge from './HomeAboutMeLarge';
import HomePicture from './HomePicture';

const styledWrapper = makeStyles((theme) => ({
  root: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    }
  }
}));

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
      >
        <HomePicture />
        <HomeAboutMeSmall />
        <HomeAboutMeLarge />
      </Grid>
    </Grid>
  )
}

export default SectionHome;
