//Package Imports
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//MUI Icon Imports
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
//Local Component Imports
import Image from "../../../shared/components/Image";
import PartnerSlider from "./PartnerSlider";
//Local Image Imports
import phone1 from "../../data/images/Phone1.png";
import phone2 from "../../data/images/Phone2.png";
import whoImg from "../../data/images/who.svg";
import resImg from "../../data/images/resolutionproject.png";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
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
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4.5),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1.5),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  headerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "4rem",
    lineHeight: "4.875rem",
    color: "#1A1A1A",
  },
  headerText2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    color: "#1A1A1A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
  },
  barMargin: {
    margin: theme.spacing(1),
  },

  phone1: {
    width: "40%",
    marginLeft: "20px",
  },
  phone2: {
    width: "30%",
    marginLeft: "-20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "-120px",
    },
  },
  rotateImg: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  whiteText: {
    color: "#fff",
    maxWidth: "80%",
    position: "relative",
    left: "180px",
    bottom: "130px",
  },
  button: {
    margin: theme.spacing(1),
  },
  justifyForSm: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  redForSm: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgb(138, 3, 3)",
    },
  },
});

function CtaSection(props) {
  const { classes, theme, width } = props;
  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <div className="container-fluid lg-p-top-alt">
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              style={{ backgroundColor: "rgb(138, 3, 3)" }}
              data-aos-delay="500"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box
                  justifyContent="space-between"
                  className={classNames("row", classes.justifyForSm)}
                >
                  <Grid item md={6} className={classes.rotateImg}>
                    <Hidden smDown>
                      <Image
                        src={phone1}
                        className={classes.phone1}
                        alt="Bigger Phone"
                      />
                    </Hidden>
                    <Image
                      src={phone2}
                      className={classes.phone2}
                      alt="Smaller Phone"
                    />
                  </Grid>
                  <Grid item xs={12} md={5} className={classes.redForSm}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          className={classes.headerText2}
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          style={{ color: "#FFF" }}
                        >
                          You can do all with the mobile application.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            variant="body1"
                            style={{ color: "#FFF" }}
                          >
                            Build a blood donation routine, track donations and
                            receive your medical reports. Create a blood drive
                            or start a virtual donation campaign. Connect, chat,
                            form bonds and build a vibrant donor network.
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          size="medium"
                          color="secondary"
                          className={classes.button}
                          startIcon={<AppleIcon />}
                        >
                          Download on App Store
                        </Button>
                        <Button
                          variant="contained"
                          size="medium"
                          color="secondary"
                          className={classes.button}
                          startIcon={<AndroidIcon />}
                        >
                          Download on Google Play
                        </Button>
                      </div>
                      <PartnerSlider classes={classes} />
                    </Box>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
}

CtaSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(CtaSection));
