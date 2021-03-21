import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styledPortfolioItemWrapper = makeStyles({
  root: {
    borderStyle: 'solid',
    height: '200px',
    lineHeight: '200px',
    textAlign: 'center',
    width: '200px',
  },
});

const PortfolioItem = ({ portfolioItem }) => {
  const styledPortfolioItemWrapperClass = styledPortfolioItemWrapper();

  return (
    <Grid
      item
    >
      <div className={styledPortfolioItemWrapperClass.root}>
        <a href={portfolioItem.github_link} target="_blank">{portfolioItem.project_name}</a>
      </div>
    </Grid>
  )
}

export default PortfolioItem;
