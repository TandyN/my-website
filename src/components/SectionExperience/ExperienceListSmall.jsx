import React from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const styledCompanyAndTitle = makeStyles({
  root: {
    textAlign: 'center',
    margin: 10,
  }
});

const styledExperienceList = makeStyles({
  root: {
    width: '75%',
  },
});

const ExperienceListSmall = ({ experienceData }) => {
  const styledCompanyAndTitleClass = styledCompanyAndTitle();
  const styledExperienceListClass = styledExperienceList();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Hidden mdUp>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        className={styledExperienceListClass.root}
      >
        {experienceData.map((experienceItem, index) => {
          return (
            <Grid
              item
              key={index}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleExpand(`panel${index}`)}
              >
                <AccordionSummary>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={0}
                  >
                    <h3 className={styledCompanyAndTitleClass.root}>{`${experienceItem.start_year} - ${experienceItem.end_year}`}</h3>
                    <h3 className={styledCompanyAndTitleClass.root}>{experienceItem.company}</h3>
                    <h4 className={styledCompanyAndTitleClass.root}>{experienceItem.position_title}</h4>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <h5>{experienceItem.description}</h5>
                </AccordionDetails>
              </Accordion>
            </Grid>
          )
        })}
      </Grid>
    </Hidden>
  )
}

export default ExperienceListSmall;
