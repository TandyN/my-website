import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const MenuBar = ({ hanldeMenuBarClick }) => {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <ButtonGroup>
            <Button onClick={() => hanldeMenuBarClick(0)}>Home</Button>
            <Button onClick={() => hanldeMenuBarClick(1)}>Skills</Button>
            <Button onClick={() => hanldeMenuBarClick(2)}>Experience</Button>
            <Button onClick={() => hanldeMenuBarClick(3)}>Portfolio</Button>
            <Button onClick={() => hanldeMenuBarClick(4)}>Contact</Button>
            <Button onClick={() => hanldeMenuBarClick(5)}>Personal</Button>
          </ButtonGroup>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar;
