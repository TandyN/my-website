import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const MenuBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <ButtonGroup>
            <Button>Home</Button>
            <Button>Skills</Button>
            <Button>Experience</Button>
            <Button>Portfolio</Button>
            <Button>Personal</Button>
          </ButtonGroup>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar;
