import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const styledAboutMe = makeStyles({
  root: {
    maxWidth: '500px',
    wordWrap: 'break-word',
  }
});

const HomeAboutMeLarge = () => {
  const styledAboutMeClass = styledAboutMe();

  return (
    <Hidden smDown>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        md={3}
      >
        <p className={styledAboutMeClass.root}>About Me</p>
      </Grid>
    </Hidden>
  )
}

export default HomeAboutMeLarge;
