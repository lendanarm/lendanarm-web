import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import OpacityIcon from '@material-ui/icons/Opacity';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import StepConnector from '@material-ui/core/StepConnector';



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#8A0303',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#8A0303',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();

  const icons = {
    1: <OpacityIcon />,
    2: <LocalHospitalIcon />,
    3: <AllInboxIcon />,
  };

  return (
    <div
      className={clsx(classes.root)}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node,
};

function getSteps() {
  return ['First Step', 'Second Step', 'Third Step'];
}


export default function CustomizedSteppers() {
  const steps = getSteps();

  return (
    <React.Fragment>
      <Stepper alternativeLabel connector={<ColorlibConnector />} style={{ backgroundColor: "#E5E5E5"}} >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </React.Fragment>
  );
}