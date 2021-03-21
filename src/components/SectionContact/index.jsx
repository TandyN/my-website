import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ContactBox from './ContactBox';

const styledContactSectionWrapper = makeStyles({
  root: {
    alignItems: 'center',
    justifyItems: 'center',
    height: '70%',
  }
});

const SectionContact = () => {
  const styledContactSectionWrapperClass = styledContactSectionWrapper();

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className={styledContactSectionWrapperClass.root}
    >
      <ContactBox />
    </Grid>
  )
}

export default SectionContact;
