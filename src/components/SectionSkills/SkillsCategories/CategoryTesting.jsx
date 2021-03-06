import React from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const testingList = [
  'Jest',
  'Enzyme',
  'SuperTest',
  'k6',
  'Loader.io',
];

const CategoryTesting = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        Testing
      </AccordionSummary>
      <AccordionDetails>
      {testingList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
      </AccordionDetails>
    </Accordion>
  )
}

export default CategoryTesting;
