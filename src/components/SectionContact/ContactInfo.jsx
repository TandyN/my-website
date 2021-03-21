import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styledContactBoxWrapper = makeStyles({
  root: {
    height: '100%',
  }
});

const ContactInfo = () => {
  const styledContactBoxWrapperClass = styledContactBoxWrapper();

  return (
    <Grid
      item
      xs={5}
    >
      <Grid
        container
        justify="space-evenly"
        direction="column"
        className={styledContactBoxWrapperClass.root}
      >
        <h2>Contact</h2>
        <p>Info</p>
        <p>Email</p>
        <p>Phone</p>
      </Grid>
    </Grid>
  )
}

export default ContactInfo;
