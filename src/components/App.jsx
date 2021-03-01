import React from 'react';
import Container from '@material-ui/core/Container';
import MenuBar from './MenuBar';
import SectionHome from './SectionHome';
import SectionSkills from './SectionSkills';

const App = () => {
  return (
    <Container maxWidth="lg">
      <MenuBar />
      <SectionHome />
      <SectionSkills />
    </Container>
  )
}

export default App;
