import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageSelf from '../../../images/me.jpg';

const styledImg = makeStyles({
  root: {
    borderRadius: 360,
    height: '400px',
    width: '400px',
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
