import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import SectionHome from './SectionHome';
import SectionSkills from './SectionSkills';
import SectionExperience from './SectionExperience';
import SectionPortfilio from './SectionPortfolio';
import SectionContact from './SectionContact';
import SectionPersonal from './SectionPersonal';

const componentBox = makeStyles({
  root: {
    height: '97%',
    paddingTop: '64px',
  }
});

const App = () => {
  const componentBoxClass = componentBox();

  const [currentPage, setCurrentPage] = React.useState((0));
  const [currentComponent, setCurrentComponent] = React.useState((<SectionHome />));

  React.useEffect(() => {
    changeComponent();
    console.log('render');
  }, [currentPage]);

  const changeComponent = () => {
    if (currentPage === 0) setCurrentComponent(<SectionHome />);
    else if (currentPage === 1) setCurrentComponent(<SectionSkills />);
    else if (currentPage === 2) setCurrentComponent(<SectionExperience />);
    else if (currentPage === 3) setCurrentComponent(<SectionPortfilio />);
    else if (currentPage === 4) setCurrentComponent(<SectionContact />);
    else if (currentPage === 5) setCurrentComponent(<SectionPersonal />);
  }

  const hanldeMenuBarClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <Container
      maxWidth="lg"
    >
      <MenuBar hanldeMenuBarClick={hanldeMenuBarClick} />
      <Box
        className={componentBoxClass.root}
      >
          {currentComponent}
      </Box>
    </Container>
  )
}

export default App;
