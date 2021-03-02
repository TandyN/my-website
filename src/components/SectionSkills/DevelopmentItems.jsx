import React from 'react';
import Grid from '@material-ui/core/Grid';

const developmentList = [
  'Git',
  'Docker',
  'GitLab CI/CD',
  'Webpack',
  'Babel',
  'AWS S3/EC2',
  'Heroku',
  'NGINX',
];

const DevelopmentItems = () => {
  return (
    <Grid
      container
      spacing={4}
    >
      {developmentList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
    </Grid>
  )
}

export default DevelopmentItems;
