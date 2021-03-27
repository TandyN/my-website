import React from 'react';
import { Grid } from '@material-ui/core';

import { ProjectContext } from './ProjectContext';
import MainPageProjectItem from './MainPageProjectItem';
import projects from './projects.json';

const MainPageBottom = () => {
  return (
    <Grid
      container
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
