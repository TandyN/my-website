import React from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';

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

const ProjectItemDescription = ({ project_title, project_caption }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.infoWrapper}
      direction='column'
      justify='center'
    >
      <h3 className={`${classes.projectHeader} ${classes.regularText}`}>{project_title}</h3>
      <p className={classes.projectCaption}>{project_caption}</p>
    </Grid>
  )
}

export default ProjectItemDescription;
