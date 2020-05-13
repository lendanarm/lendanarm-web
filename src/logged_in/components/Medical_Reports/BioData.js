import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//Icons
import PersonIcon from "@material-ui/icons/Person";
import ExposureIcon from "@material-ui/icons/Exposure";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import OpacityIcon from "@material-ui/icons/Opacity";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const BioData = (props) => {
  const {
    classes,
    user: {
      credentials: {
        fullName,
        rhesusFactor,
        bloodGroup,
        healthServiceProvider,
        bloodGenotype,
        dateOfBirth,
      },
      loading,
    },
  } = props;
  const credentialsArr = [
    {
      title: "Your Full Name",
      cred: fullName,
      icon: <PersonIcon />,
    },
    {
      title: "Your Blood Genotype",
      cred: bloodGenotype,
      icon: <OpacityIcon />,
    },
    {
      title: "Your Blood Group",
      cred: bloodGroup,
      icon: <GroupWorkIcon />,
    },

    {
      title: "Rhesus Factor",
      cred: rhesusFactor,
      icon: <ExposureIcon />,
    },
    {
      title: "Your Health Service Provider / Primary Hospital",
      cred: healthServiceProvider,
      icon: <LocalHospitalIcon />,
    },

    {
      title: "Your Date of Birth",
      cred: dateOfBirth,
      icon: <ChildFriendlyIcon />,
    },
  ];

  const biodataMarkup = !loading ? (
    credentialsArr.map((credential) => (
      <ExpansionPanel key={credential.healthServiceProvider}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {credential.icon}
          <Typography className={classes.heading} style={{ marginLeft: 20 }}>
            {credential.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{credential.cred}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))
  ) : (
    <p>Loading ...</p>
  );

  return <div className={classes.root}>{biodataMarkup}</div>;
};

export default withStyles(styles, { withTheme: true })(BioData);
