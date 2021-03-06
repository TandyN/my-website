import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import SectionHome from './SectionHome';
import SectionSkills from './SectionSkills';
import SectionExperience from './SectionExperience';
import SectionPortfilio from './SectionPortfolio';
import SectionContact from './SectionContact';
import SectionPersonal from './SectionPersonal';

const appBox = makeStyles({
  root: {
    backgroundColor: '#333',
  }
});

const App = () => {
  const appBoxClass = appBox();

  const hanldeMenuBarClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <Container
      maxWidth="xl"
    >
      <MenuBar hanldeMenuBarClick={hanldeMenuBarClick} />
      <SectionHome />
      <SectionSkills />
      <SectionExperience />
      <SectionPortfilio />
      <SectionContact />
      <SectionPersonal />
    </Container>
  )
}

export default App;
