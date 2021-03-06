import React from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const frontendList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'styled-components',
  'Material-UI'
];

const FrontendItems = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        Frontend
      </AccordionSummary>
      <AccordionDetails>
      {frontendList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
      </AccordionDetails>
    </Accordion>
  )
}

export default FrontendItems;
