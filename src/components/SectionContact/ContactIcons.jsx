import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

const styledContactIconsWrapper = makeStyles({
  root: {
    marginTop: '50px',
  }
});

const ContactIcons = () => {
  const styledContactIconsWrapperClass = styledContactIconsWrapper();

  return (
    <div
      className={styledContactIconsWrapperClass.root}
    >
      <LinkedInIcon />
    </div>
  )
}

export default ContactIcons;
