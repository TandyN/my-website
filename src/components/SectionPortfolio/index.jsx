import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioItem from './PortfolioItem';

import portfolioData from './portfolio.json';

const styledSectionPortfolioWrapper = makeStyles({
  root: {
    backgroundColor: '#333b50',
    justifyContent: 'space-evenly',
    margin: 'auto',
    minHeight: '70%',
  },
});

const styledPortfilioItemsWrapper = makeStyles({
  root: {
    maxWidth: '870px',
  },
});

const SectionPortfilio = () => {
  const styledSectionPortfolioWrapperClass = styledSectionPortfolioWrapper();
  const styledPortfilioItemsWrapperClass = styledPortfilioItemsWrapper();

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className={styledSectionPortfolioWrapperClass.root}
    >
      <Grid
        container
        alignItems="center"
        justify="space-evenly"
        direction="row"
        spacing={4}
        className={styledPortfilioItemsWrapperClass.root}
      >
        {portfolioData.map((portfolioItem, index) => {
          return <PortfolioItem portfolioItem={portfolioItem} key={index} />
        })}
      </Grid>
    </Grid>
  )
}

export default SectionPortfilio;
