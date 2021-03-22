import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ContactInfo from './ContactInfo';
import ContactTextFields from './ContactTextFields';
import ContactIcons from './ContactIcons';

const styledContactBoxWrapper = makeStyles({
  root: {
    backgroundColor: '#333b50',
    margin: 'auto',
    width: '700px',
  }
});

const ContactBox = () => {
  const styledContactBoxWrapperClass = styledContactBoxWrapper();

  return (
    <Paper
      elevation={5}
      className={styledContactBoxWrapperClass.root}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Grid
          container
          justify="space-around"
          direction="row"
        >
          <ContactInfo />
          <ContactTextFields />
        </Grid>
        <ContactIcons />
      </Grid>
    </Paper>
  )
}

export default ContactBox;
