import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const styledAboutMe = makeStyles({
  root: {
    fontSize: '1.5rem',
    lineHeight: 2.0,
    textAlign: 'center',
    whiteSpace: 'pre-line',
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
        md={6}
      >
        <h1 className={styledAboutMeClass.root}>
          {`Tandy Nguyen
          Full-Stack Engineer
          JavaScript & Node.js`}
        </h1>
      </Grid>
    </Hidden>
  )
}

export default HomeAboutMeSmall;
