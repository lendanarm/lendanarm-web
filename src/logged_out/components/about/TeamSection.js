//Package Imports
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
//MUI Icon Imports
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//Local Component Imports
import StepsToDonate from "../home/StepsToDonate";
import calculateSpacing from "../home/calculateSpacing";
import Steps from "../home/Steps";
import WaveBorder from "../../../shared/components/WaveBorder";
import Ifeanyi from "../../data/images/Ifeanyi.jpg";
import imodoye from "../../data/images/imodoye.jpg";
import fawaz from "../../data/images/fawaz.jpg";
import olamide from "../../data/images/olamide.jpg";
import obehioye from "../../data/images/obehioye.jpg";
import redcross from "../../data/images/redcross.png";
import jcin from "../../data/images/jcin.png";

const styles = (theme) => ({
  card: {
    backgroundColor: theme.palette.background.alternate,
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
  headerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    color: "#1A1A1A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: "1rem",
    },
  },
  teamContainer: {
    position: "relative",
  },
  teamImage: {
    width: "auto",
    height: "230px",
    filter: "grayscale(1) brightness(0.6)",
    borderRadius: 5,
    "&:hover": {
      transform: "scale(1.04)",
      filter: "grayscale(0) brightness(0.9)",
    },
    "&::after": {
      // filter: "brightness(0.7)",
    },
  },
  memberIcon: {
    color: "#fff",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(0.85)",
    },
  },
  spanIcon: {
    position: "absolute",
    bottom: "84%",
    left: "80%",
    zIndex: 1,
  },
  teamTextName: {
    color: "#fff",
    fontWeight: "bold",
    position: "absolute",
    zIndex: 1,
    top: "80%",
    left: "5%",
  },
  teamTextPosition: {
    color: "#fff",
    position: "absolute",
    zIndex: 1,
    top: "88%",
    left: "5%",
  },
  waveBorder: {
    paddingTop: theme.spacing(1),
  },
  partner: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: 5,
    filter: "brightness(0.9)",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});
const team = [
  {
    image: imodoye,
    name: "Dr Imodoye Abioro",
    website: "https://kdfoundation.org.ng",
    position: "Founder/CEO",
    linkedin: "https://linkedin.com/in/imodoye-abioro",
  },
  {
    image: fawaz,
    name: "Dr Tunde Oyebamiji",
    position: "Director, Operations",
    linkedin: "https://linkedin.com/in/tundeoyebamiji",
  },
  {
    image: Ifeanyi,
    name: "Ifeanyi Muogbo",
    website: "https://ifeanyimuogbo.tech",
    position: "Director, Technology",
    linkedin: "https://linkedin.com/in/ifeanyichukwu-muogbo",
  },
  {
    image: olamide,
    name: "Dr Olamide Bello",
    position: "Director, Logistics & Training",
    linkedin: "https://www.linkedin.com/in/olamide-bello-63497a14a/",
  },
  {
    image: obehioye,
    name: "Dr Obehioye Aimiosior",
    position: "Director, Recruitment & Supply",
    linkedin: "https://www.linkedin.com/in/obehioye-aimiosior-9ab43a10b/",
  },
];

const partnerOrg = [
  {
    image: jcin,
    name: "Hamstrings Club, UCH",
    position: "Partner Organization",
  },
  {
    image: redcross,
    name: "Red Cross, UCH",
    position: "Partner Organization",
  },
];

function HowToSection(props) {
  const { width, classes, theme } = props;
  return (
    <div style={{ backgroundColor: theme.palette.background.alternate }}>
      <div
        className={classNames(
          "container-fluid",
          classes.container,
          classes.card
        )}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              className={classes.headerText}
              variant={isWidthUp("lg", width) ? "h4" : "h5"}
              style={{ textAlign: "center" }}
            >
              Team
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} justify="center">
              {team.map((member, index) => (
                <Grid key={index} item className={classes.teamContainer}>
                  <Typography
                    variant={"subtitle1"}
                    className={classes.teamTextName}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant={"subtitle2"}
                    className={classes.teamTextPosition}
                  >
                    {member.position}
                  </Typography>
                  <span className={classes.spanIcon}>
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit" }}
                      >
                        <LanguageIcon
                          className={classes.memberIcon}
                          fontSize="small"
                        />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit" }}
                      >
                        <LinkedInIcon className={classes.memberIcon} />
                      </a>
                    )}
                  </span>
                  <img src={member.image} className={classes.teamImage} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.headerText}
              variant={isWidthUp("lg", width) ? "h4" : "h5"}
              style={{ textAlign: "center" }}
            >
              Partner Organizations
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="center" spacing={1}>
            {partnerOrg.map((partner, index) => (
              <Grid item key={index}>
                <img src={partner.image} className={classes.partner} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
      <WaveBorder
        upperColor={theme.palette.background.alternate}
        lowerColor={theme.palette.primary.main}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </div>
  );
}

HowToSection.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(HowToSection)
);
