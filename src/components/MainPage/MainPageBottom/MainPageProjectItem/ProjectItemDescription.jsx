import React, { useContext } from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';

import { ProjectContext } from '../ProjectContext';

const useStyles = makeStyles((theme) => ({
  infoWrapper: {
    marginRight: 1,
    maxHeight: '65px',
    minWidth: '250px',
  },
  projectHeader: {
    fontWeight: 500,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(11px + 0.5vw)',
    },
  },
  projectCaption: {
    color: theme.palette.text.secondary,
    fontSize: '13px',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(9px + 0.5vw)',
    }
  },
}));

const ProjectItemDescription = () => {
  const classes = useStyles();
  const project = useContext(ProjectContext);

  return (
    <Grid
      container
      className={classes.infoWrapper}
      direction='column'
      justify='center'
    >
      <h3 className={`${classes.projectHeader} ${classes.regularText}`}>{project.project_title}</h3>
      <p className={classes.projectCaption}>{project.project_caption}</p>
    </Grid>
  )
}

export default ProjectItemDescription;
