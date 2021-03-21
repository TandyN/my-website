import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styledMessageField = makeStyles({
  root: {
    marginBottom: '20px',
    width: '100%',
  }
});

const ContactTextFields = () => {
  const styledMessageFieldClass = styledMessageField();

  return (
    <Grid
      item
      xs={5}
    >
      <TextField required label="Name" />
      <TextField required label="Email" />
      <TextField label="Phone" />
      <TextField
        required
        multiline
        label="Message"
        rows={6}
        className={styledMessageFieldClass.root}
      />
    </Grid>
  )
}

export default ContactTextFields;
