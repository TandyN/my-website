import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageSelf from '../../../images/me.jpg';

const styledImg = makeStyles({
  root: {
    height: '400px',
    width: '400px',
  }
});

const SectionHome = () => {
  const styledImgClass = styledImg();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <img src={ImageSelf} className={styledImgClass.root} />
      </Grid>
      <Grid item>
        <p>About Me</p>
      </Grid>
    </Grid>
  )
}

export default SectionHome;
