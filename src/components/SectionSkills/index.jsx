import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FrontendItems from './FrontendItems';
import BackendItems from './BackendItems';
import TestingItems from './TestingItems';
import DevelopmentItems from './DevelopmentItems';

const gridCategory = makeStyles({
  root: {
    width: '50%',
  },
});

const SectionSkills = () => {
  const gridCategoryClass = gridCategory();
  const [frontendDisplay, setFrontendDisplay] = React.useState('none');
  const [backendDisplay, setBackendDisplay] = React.useState('none');
  const [testingDisplay, setTestingDisplay] = React.useState('none');
  const [developmentDisplay, setDevelopmentDisplay] = React.useState('none');

  const handleFrontendDisplay = () => {
    setFrontendDisplay((frontendDisplay === 'none') ? '' : 'none');
  }

  const handleBackendDisplay = () => {
    setBackendDisplay((backendDisplay === 'none') ? '' : 'none');
  }

  const handleTestingDisplay = () => {
    setTestingDisplay((testingDisplay === 'none') ? '' : 'none');
  }

  const handleDevelopmentDisplay = () => {
    setDevelopmentDisplay((developmentDisplay === 'none') ? '' : 'none');
  }

  return (
    <Grid
      container
      spacing={0}
      alignItems='center'
      direction='column'
    >
      <h2>Skills</h2>
      <Grid item className={gridCategoryClass.root} >
        <Button onClick={handleFrontendDisplay}>Frontend</Button>
        <Box display={frontendDisplay}>
          <FrontendItems />
        </Box>
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button onClick={handleBackendDisplay}>Backend</Button>
        <Box display={backendDisplay}>
          <BackendItems />
        </Box>
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button onClick={handleTestingDisplay}>Testing</Button>
        <Box display={testingDisplay}>
          <TestingItems />
        </Box>
      </Grid>
      <Grid item className={gridCategoryClass.root}>
        <Button onClick={handleDevelopmentDisplay}>Development</Button>
        <Box display={developmentDisplay}>
          <DevelopmentItems />
        </Box>
      </Grid>
    </Grid>
  )
}

export default SectionSkills;
