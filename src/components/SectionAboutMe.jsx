import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageSelf from '../../images/me.png';

const gridContainer = makeStyles({
  root: {
    padding: '100px 0',
  },
});

const gridPicture = makeStyles({
  root: {
    backgroundImage: `url(${ImageSelf})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '500px',
    width: '500px',
  },
});

const SectionAboutMe = () => {
  const gridContainerClass = gridContainer();
  const gridPictureClass = gridPicture();

  return (
    <Grid
      container
      spacing={10}
      justify='center'
      className={gridContainerClass.root}
      >
      <h2>ABOUT ME</h2>
      <Grid item className={gridPictureClass.root} />
      <Grid item>About Me Paragraph</Grid>
    </Grid>
  )
}

export default SectionAboutMe;
