import React from 'react';
import Container from '@material-ui/core/Container';
import MenuBar from './MenuBar';
import SectionAboutMe from './SectionAboutMe';
import SectionSkills from './SectionSkills';

const App = () => {
  return (
    <Container maxWidth="lg">
      <MenuBar />
      <SectionAboutMe />
      <SectionSkills />
    </Container>
  )
}

export default App;
