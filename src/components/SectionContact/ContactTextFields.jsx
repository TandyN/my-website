import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

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
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        className={styledMessageFieldClass.root}
      >
        Send
      </Button>
    </Grid>
  )
}

export default ContactTextFields;
