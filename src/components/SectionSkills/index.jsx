import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const SectionSkills = () => {
  return (
    <Grid container spacing={10} direction="column">
      <Grid item>
        <Button>Frontend</Button>
      </Grid>
      <Grid item>
        <Button>Backend</Button>
      </Grid>
      <Grid item>
        <Button>Databases</Button>
      </Grid>
      <Grid item>
        <Button>Testing</Button>
      </Grid>
    </Grid>
  )
}

export default SectionSkills;
