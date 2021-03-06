import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageSelf from '../../../images/me.jpg';

const styledImg = makeStyles((theme) => ({
  root: {
    borderColor: '#333',
    borderRadius: 360,
    borderStyle: 'solid',
    borderWidth: '10px',
    height: '300px',
    width: '300px',
    [theme.breakpoints.down('sm')]: {
      height: '250px',
      width: '250px',
    },
  }
}));

const HomePicture = () => {
  const styledImgClass = styledImg();

  return (
    <Grid item>
      <img src={ImageSelf} className={styledImgClass.root} />
    </Grid>
  )
}

export default HomePicture;
