import React from 'react';

const PortfolioItem = ({ portfolioItem }) => {
  return (
    <a href={portfolioItem.github_link} target="_blank">{portfolioItem.project_name}</a>
  )
}

export default PortfolioItem;
