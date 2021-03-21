import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styledContactInfoWrapper = makeStyles({
  root: {
    height: '100%',
  }
});

const ContactInfo = () => {
  const styledContactInfoWrapperClass = styledContactInfoWrapper();

  return (
    <Grid
      item
      xs={5}
    >
      <Grid
        container
        justify="space-evenly"
        direction="column"
        className={styledContactInfoWrapperClass.root}
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
