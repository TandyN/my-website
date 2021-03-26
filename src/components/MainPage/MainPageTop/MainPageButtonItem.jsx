import React from 'react';
import {
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(9px + 0.5vw)',
    },
  },
}));

const MainPageButtons = ({ description, link }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      href={link}
      size='small'
      target='blank'
    >
      {description}
    </Button>
  )
}

export default MainPageButtons;
