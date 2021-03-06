import React from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const backendList = [
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Couchbase',
  'Redis'
];

const BackendItems = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        Backend
      </AccordionSummary>
      <AccordionDetails>
      {backendList.map((value, index) => {
        return (
          <Grid item key={index}>{value}</Grid>
        )
      })}
      </AccordionDetails>
    </Accordion>
  )
}

export default BackendItems;
