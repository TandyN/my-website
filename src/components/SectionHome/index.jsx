import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageSelf from '../../../images/me.jpg';

const horizontalAlign = makeStyles({
  root: {
    height: '100%',
  },
});

const gridPictureItem = makeStyles({
  root: {
    width: '400px',
  },
});

const imgPicture = makeStyles({
  root: {
    borderRadius: 360,
    height: '400px',
    width: '400px',
  },
});

const gridAboutMeItem = makeStyles({
  root: {
    margin: 0,
    width: '400px',
  },
});

const SectionHome = () => {
  const horizontalAlignContainer = horizontalAlign();

  const gridAboutMeItemClass = gridAboutMeItem();

  const gridPictureItemClass = gridPictureItem();
  const imgPictureClass = imgPicture();

  return (
    <Grid
      container
      spacing={0}
      justify="center"
      alignItems="center"
      className={horizontalAlignContainer.root}
    >
      <Grid item className={gridPictureItemClass.root} xsm={12} sm={12} md={4}>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <img src={ImageSelf} className={imgPictureClass.root} />
        </Grid>
      </Grid>
      <Grid item className={gridAboutMeItemClass.root} xsm={12} sm={12} md={5} >
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Grid item >About Me</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SectionHome;
