import React from 'react';
import {
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  description: {
    marginBottom: 5,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(7px + 3vw)',
    },
  },
}));

const ColoredText = ({ text, color }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.description}
      color={(color === 'secondary') ? 'secondary' : 'primary'}
      component='span'
      variant='h4'
    >
      {text}
    </Typography>
  )
}

const MainPageDescription = () => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.description}
      variant='h4'
    >
      <ColoredText text='Tandy Nguyen ' />
      is a <ColoredText color='secondary' text='full-stack software engineer ' />
      experienced with <ColoredText color='secondary' text='JavaScript and Node.js' />
    </Typography>
  )
}

export default MainPageDescription;
