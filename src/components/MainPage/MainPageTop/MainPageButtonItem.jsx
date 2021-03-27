import React from 'react';
import {
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 360,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(9px + 0.5vw)',
    },
  },
}));

const MainPageButtonItem = ({ description, link }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Button
        className={classes.button}
        href={link}
        size='small'
        target='blank'
        variant='outlined'
      >
        {description}
      </Button>
    </Grid>
  )
}

export default MainPageButtonItem;
