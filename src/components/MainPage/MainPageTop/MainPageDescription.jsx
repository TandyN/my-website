import React from 'react';
import {
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  description: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(7px + 3vw)',
    },
  },
}));

const MainPageDescription = () => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.description}
      variant="h4"
    >
      <Typography className={classes.description} color="primary" component="span" variant="h4">Tandy Nguyen </Typography>
            is a
      <Typography className={classes.description} color="secondary" component="span" variant="h4"> full-stack software engineer </Typography>
            experienced with
      <Typography className={classes.description} color="secondary" component="span" variant="h4"> JavaScript and Node.js </Typography>
    </Typography>
  )
}

export default MainPageDescription;
