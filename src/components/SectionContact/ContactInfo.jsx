import React from 'react';
import Grid from '@material-ui/core/Grid';

const ContactInfo = () => {
  return (
    <Grid
      item
      xs={5}
    >
      <Grid
        container
        direction="column"
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
