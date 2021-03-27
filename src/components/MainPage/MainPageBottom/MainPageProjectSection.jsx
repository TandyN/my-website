import React from 'react';
import { Grid } from '@material-ui/core';

import MainPageProjectItem from './MainPageProjectItem';

const MainPageProjectSection = ({ projects }) => {
  return (
    <Grid
      container
      justify='space-between'
      spacing={1}
    >
      {
        projects.map((project, index) => {
          return (
            <MainPageProjectItem
              key={`project${index}`}
              project_title={project.project_title}
              project_caption={project.project_caption}
            />
          );
        })
      }
    </Grid>
  )
}

export default MainPageProjectSection;
