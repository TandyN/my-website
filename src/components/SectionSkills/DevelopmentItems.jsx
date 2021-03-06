import React from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        Development
      </AccordionSummary>
      <AccordionDetails>
      {developmentList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
      </AccordionDetails>
    </Accordion>
  )
}

export default DevelopmentItems;
