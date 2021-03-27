import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';

import ProjectItemDescription from './ProjectItemDescription';

const useStyles = makeStyles({
  img: {
    borderRadius: 10,
    marginRight: 10,
  },
});

const ProjectItemContentSection = ({ project_title, project_caption }) => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      <img className={classes.img} src='https://i.imgur.com/hNwV7Tp.png' />
      <ProjectItemDescription project_title={project_title} project_caption={project_caption} />
    </Box>
  )
}

export default ProjectItemContentSection;
