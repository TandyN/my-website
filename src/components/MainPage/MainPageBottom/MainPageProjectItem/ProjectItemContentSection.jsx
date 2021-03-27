import React, { useContext } from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';

import { ProjectContext } from '../ProjectContext';
import ProjectItemDescription from './ProjectItemDescription';

const useStyles = makeStyles({
  img: {
    borderRadius: 10,
    marginRight: 10,
  },
});

const ProjectItemContentSection = () => {
  const classes = useStyles();
  const project = useContext(ProjectContext);

  return (
    <Box display='flex'>
      <img className={classes.img} src={project.project_icon} />
      <ProjectItemDescription />
    </Box>
  )
}

export default ProjectItemContentSection;
