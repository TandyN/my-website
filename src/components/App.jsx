import React from 'react';
import Container from '@material-ui/core/Container';
import MenuBar from './MenuBar';
import SectionHome from './SectionHome';
import SectionSkills from './SectionSkills';
import SectionExperience from './SectionExperience';
import SectionPortfilio from './SectionPortfolio';

const App = () => {
  return (
    <Container maxWidth="xl">
      <MenuBar />
      <SectionHome />
      <SectionSkills />
      <SectionExperience />
      <SectionPortfilio />
    </Container>
  )
}

export default App;
