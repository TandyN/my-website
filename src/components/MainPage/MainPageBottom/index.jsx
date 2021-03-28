import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';

import { ProjectContext } from './ProjectContext';
import MainPageProjectItem from './MainPageProjectItem';
import projects from './projects.json';

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      overflowY: 'auto',
    }
  }
}));

const MainPageBottom = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.main}
      justify='space-between'
      spacing={2}
    >
      {
        projects.map((project, index) => {

          return (
            <ProjectContext.Provider
              key={`project${index}`}
              value={project}
            >
              <MainPageProjectItem />
            </ProjectContext.Provider>
          );
        })
      }
    </Grid>
  )
}

export default MainPageBottom;
