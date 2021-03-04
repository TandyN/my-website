import React from 'react';
import Container from '@material-ui/core/Container';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import MenuBar from './MenuBar';
import SectionHome from './SectionHome';
import SectionSkills from './SectionSkills';
import SectionExperience from './SectionExperience';
import SectionPortfilio from './SectionPortfolio';
import SectionContact from './SectionContact';
import SectionPersonal from './SectionPersonal';

const App = () => {
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

  const handleScrollUp = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log('up');
    }
  }

  const handleScrollDown = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
      console.log('down');
    }
  }

  const hanldeMenuBarClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <Container
      maxWidth="lg"
    >
      <MenuBar hanldeMenuBarClick={hanldeMenuBarClick} />
      <ReactScrollWheelHandler
        upHandler={handleScrollUp}
        downHandler={handleScrollDown}
        style={{
          height: '100%',
        }}
      >
        {currentComponent}
      </ReactScrollWheelHandler>
    </Container>
  )
}

export default App;
