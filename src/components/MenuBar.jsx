import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const MenuBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <ButtonGroup>
          <Button>About Me</Button>
          <Button>Skills</Button>
          <Button>Experience</Button>
          <Button>Portfolio</Button>
          <Button>Personal</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar;
