import React from 'react';
import Box from '@material-ui/core/Box';
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
    fontFamily: 'sans-serif',
    height: '100%',
  },
  seperator: {
    backgroundColor: '#333b50',
    height: '100px',
    lineHeight: '100px',
    margin: 0,
    textAlign: 'center',
  }
});

const App = () => {
  const appBoxClass = appBox();

  return (
    <Box
      className={appBoxClass.root}
    >
      <MenuBar />
      <SectionHome />
      <h2 className={appBoxClass.seperator}>Skills</h2>
      <SectionSkills />
      <h2 className={appBoxClass.seperator}>Experience</h2>
      <SectionExperience />
      <h2 className={appBoxClass.seperator}>Portfolio</h2>
      <SectionPortfilio />
      <SectionContact />
      <SectionPersonal />
    </Box>
  )
}

export default App;
