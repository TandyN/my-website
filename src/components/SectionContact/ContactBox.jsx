import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ContactInfo from './ContactInfo';



const styledContactBoxWrapper = makeStyles({
  root: {
    margin: 'auto',
    width: '600px',
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
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <ContactInfo />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ContactBox;
