import React from 'react';
import Container from '@material-ui/core/Container';
import MenuBar from './MenuBar';
import SectionAboutMe from './SectionAboutMe';

const App = () => {
  return (
    <Container maxWidth="md">
      <MenuBar />
      <SectionAboutMe />
    </Container>
  )
}

export default App;
