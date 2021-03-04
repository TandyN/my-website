import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const styledAboutMe = makeStyles({
  root: {
    maxWidth: '500px',
    wordWrap: 'break-word',
  }
});

const HomeAboutMeSmall = () => {
  const styledAboutMeClass = styledAboutMe();

  return (
    <Hidden mdUp>
      <Grid
        container
        item
        justify="center"
        md={3}
      >
        <p className={styledAboutMeClass.root}>About Me</p>
      </Grid>
    </Hidden>
  )
}

export default HomeAboutMeSmall;
