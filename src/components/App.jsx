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

const appBox = makeStyles({
  root: {
    backgroundColor: '#333',
    height: '100%',
  }
});

const componentBox = makeStyles({
  root: {
    fontFamily: 'sans-serif',
    height: '100%',
    marginTop: '64px',
  }
});

const App = () => {
  const appBoxClass = appBox();
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
    <Box
      className={appBoxClass.root}
    >
      <Container
        maxWidth="xl"
        className={appBoxClass.root}
      >
        <MenuBar hanldeMenuBarClick={hanldeMenuBarClick} />
        <Box
          className={componentBoxClass.root}
        >
            {currentComponent}
        </Box>
      </Container>
    </Box>
  )
}

export default App;
