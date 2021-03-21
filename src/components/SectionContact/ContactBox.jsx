import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ContactInfo from './ContactInfo';
import ContactTextFields from './ContactTextFields';



const styledContactBoxWrapper = makeStyles({
  root: {
    margin: 'auto',
    width: '700px',
  }
});

const ContactBox = () => {
  const styledContactBoxWrapperClass = styledContactBoxWrapper();

  return (
    <Paper
      className={styledContactBoxWrapperClass.root}
    >
      <Grid
        container
        direction="column"
      >
        <Grid
          container
          justify="space-around"
          direction="row"
        >
          <ContactInfo />
          <ContactTextFields />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ContactBox;
