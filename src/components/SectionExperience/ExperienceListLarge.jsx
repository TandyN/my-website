import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const styledExperienceList = makeStyles({
  root: {
    width: '50%',
  },
});

const ExperienceListLarge = ({ experienceData }) => {
  const styledExperienceListClass = styledExperienceList();

  return (
    <Hidden smDown>
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
              <h3>{`${experienceItem.start_year} - ${experienceItem.end_year}`}</h3>
              <h3>{experienceItem.company}</h3>
              <h4>{experienceItem.position_title}</h4>
              <h5>{experienceItem.description}</h5>
            </Grid>
          )
        })}
      </Grid>
    </Hidden>
  )
}

export default ExperienceListLarge;
