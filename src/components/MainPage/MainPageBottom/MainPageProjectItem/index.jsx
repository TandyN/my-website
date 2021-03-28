import React, { useState } from 'react';
import {
  Button,
  Grid,
  makeStyles
} from '@material-ui/core';

import ProjectItemContentSection from './ProjectItemContentSection';

const useStyles = makeStyles((theme) => ({
  itemWrapper: {
    alignItems: 'center',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    outline: 'none',
    width: '49%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  regularText: {
    backgroundColor: props => (props.isHoverOverButton) ? theme.palette.action.hover : '',
    borderRadius: 360,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(9px + 0.5vw)',
    },
  },
}));

const MainPageProjectitem = () => {
  const [isHoverOverButton, setIsHoverOverButton] = useState(false);
  const classes = useStyles({ isHoverOverButton: isHoverOverButton });

  const hoverEnterItem = () => {
    setIsHoverOverButton(true);
  }

  const hoverLeaveItem = () => {
    setIsHoverOverButton(false);
  }

  return (
    <Grid
      item
      className={classes.itemWrapper}
      onMouseEnter={hoverEnterItem}
      onMouseLeave={hoverLeaveItem}
      tabIndex='0'
    >
      <ProjectItemContentSection />
      <Button
        className={classes.regularText}
        size='small'
        variant='outlined'
      >
        View
      </Button>
    </Grid>
  )
}

export default MainPageProjectitem;
