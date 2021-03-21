import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const styledAboutMe = makeStyles(() => ({
  root: {
    lineHeight: 2.0,
    textAlign: 'center',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    fontSize: '1.8rem',
  }
}));

const HomeAboutMeLarge = () => {
  const styledAboutMeClass = styledAboutMe();

  return (
    <Hidden smDown>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        md={4}
      >
        <h3 className={styledAboutMeClass.root}>
          {`Tandy Nguyen
          Full-Stack Engineer
          JavaScript & Node.js`}
        </h3>
      </Grid>
    </Hidden>
  )
}

export default HomeAboutMeLarge;
