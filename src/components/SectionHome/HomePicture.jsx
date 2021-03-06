import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageSelf from '../../../images/me.jpg';

const styledImg = makeStyles({
  root: {
    borderColor: '#333',
    borderRadius: 360,
    borderStyle: 'solid',
    borderWidth: '10px',
    height: '300px',
    width: '300px',
    '@media (min-width:1150px)': {
      height: '400px',
      width: '400px',
    },
  }
});

const HomePicture = () => {
  const styledImgClass = styledImg();

  return (
    <Grid item>
      <img src={ImageSelf} className={styledImgClass.root} />
    </Grid>
  )
}

export default HomePicture;
