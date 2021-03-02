import React from 'react';
import Container from '@material-ui/core/Container';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import MenuBar from './MenuBar';
import SectionHome from './SectionHome';
import SectionSkills from './SectionSkills';
import SectionExperience from './SectionExperience';
import SectionPortfilio from './SectionPortfolio';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState((0));


  return (
    <ReactScrollWheelHandler
      upHandler={() => { if (currentPage > 0) setCurrentPage(currentPage - 1) }}
      downHandler={() => { if (currentPage < 4) setCurrentPage(currentPage + 1) }}
    >
      <Container maxWidth="xl">
        <MenuBar />
        <SectionHome />
        <SectionSkills />
        <SectionExperience />
        <SectionPortfilio />
      </Container>
    </ReactScrollWheelHandler>
  )
}

export default App;
