import React from 'react';
import Grid from '@material-ui/core/Grid';
import PortfolioItem from './PortfolioItem';

import portfolioData from './portfolio.json';

const SectionPortfilio = () => {
  return (
    <Grid 
      container
      alignItems='center'
      direction='column'
    >
      <h2>Portfolio</h2>
      <Grid 
      container
      >
        {portfolioData.map((portfolioItem, index) => {
          return <PortfolioItem portfolioItem={portfolioItem} key={index} />
        })}
      </Grid>
    </Grid>
  )
}

export default SectionPortfilio;
