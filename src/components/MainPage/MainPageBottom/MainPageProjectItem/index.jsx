import React from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';

import ProjectItemContentSection from './ProjectItemContentSection';

const useStyles = makeStyles((theme) => ({
  itemWrapper: {
    alignItems: 'center',
    display: 'flex',
    width: '49%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  regularText: {
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(11px + 0.5vw)',
    },
  },
}));

const MainPageProjectitem = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      className={classes.itemWrapper}
    >
      <ProjectItemContentSection />
      <p className={classes.regularText}>View</p>
    </Grid>
  )
}

export default MainPageProjectitem;
