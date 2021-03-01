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
    height: '400px',
    marginTop: '50px',
    width: '400px',
  },
});

const gridAboutMe = makeStyles({
  root: {
    paddingLeft: '100px',
    width: '40%',
  },
});

const SectionHome = () => {
  const gridContainerClass = gridContainer();
  const gridPictureClass = gridPicture();
  const gridAboutMeClass = gridAboutMe();

  return (
    <Grid
      container
      spacing={10}
      justify='center'
      className={gridContainerClass.root}
    >
      <Grid item className={gridPictureClass.root} />
      <Grid
        container
        direction='column'
        justify='center'
        className={gridAboutMeClass.root}
      >
        <Grid item>About Me</Grid>        
      </Grid>
    </Grid>
  )
}

export default SectionHome;
