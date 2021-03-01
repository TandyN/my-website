import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '60px',
  },
});

const SectionAboutMe = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={10} justify='center' className={classes.root}>
      <Grid item>Picture</Grid>
      <Grid item>About Me</Grid>
    </Grid>
  )
}

export default SectionAboutMe;
