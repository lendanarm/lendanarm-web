import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  isWidthDown,
} from "@material-ui/core";
import Boy from "../../data/images/BoyHero.svg";
import HowtoBoy from "../../data/images/HowtoBoy.svg";
import Image from "../../../shared/components/Image";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import OpacityIcon from "@material-ui/icons/Opacity";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(8),
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
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
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
    fontSize: "2rem",
    lineHeight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
  },
  howMobile: {
    [theme.breakpoints.down("sm")]: {
      marginRight: 5,
    },
  },
  barMargin: {
    margin: theme.spacing(1),
  },
  imgSection: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.875rem",
    },
  },
  boy: {
    width: "80%",
  },
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment id="why">
      <div className={classNames(classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box
            style={{ justifyContent: "center" }}
            className="row"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Card
              className={classes.card}
              data-aos-delay="500"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box
                  style={{ justifyContent: "space-between" }}
                  className="row"
                >
                  <Grid item md={5} className={classes.imgSection}>
                    <Image src={Boy} className={classes.boy} alt="pattern" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          Hosting a Blood Drive
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Grid container spacing={2}>
                            <Grid item xs={1} className={classes.howMobile}>
                              <OpacityIcon color="primary" />
                            </Grid>
                            <Grid item xs={isWidthDown("sm", width) ? 10 : 9}>
                              <Typography variant="body1" color="textSecondary">
                                One pint of blood saves three lives. Save many
                                lives by hosting a drive.
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={2}>
                            <Grid item xs={1} className={classes.howMobile}>
                              <PeopleAltIcon color="primary" />
                            </Grid>
                            <Grid item xs={isWidthDown("sm", width) ? 10 : 9}>
                              <Typography variant="body1" color="textSecondary">
                                Great way to contribute to your community.
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={2}>
                            <Grid item xs={1} className={classes.howMobile}>
                              <LocalHospitalIcon color="primary" />
                            </Grid>
                            <Grid item xs={isWidthDown("sm", width) ? 10 : 9}>
                              <Typography variant="body1" color="textSecondary">
                                This in turn allows Project Lend an Arm to
                                ensure steady and stable supply of blood and
                                blood products to meet Nigeria's growing demand.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                </Box>
              </div>
            </Card>

            <Card
              className={classes.card}
              data-aos-delay="700"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box
                  style={{ justifyContent: "space-between" }}
                  className="row"
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                      style={{ width: "80%" }}
                    >
                      <Box mb={4}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          How Hosting a Blood Drive Works
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Once you or your organization commit to hosting a
                            blood drive, contact the nearest Project-Lend an Arm
                            center or email us at{" "}
                            <a
                              href="mailto:blooddrive@lendanarm.ng"
                              style={{
                                textDecoration: "none",
                                color: "#8A0303",
                              }}
                            >
                              blooddrive@lendanarm.ng
                            </a>
                            . A Project- Lend an Arm representative will be
                            assigned to provide you or your organization with
                            all the tools and support to host a successful blood
                            drive.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>

                  <Grid item md={5} className={classes.imgSection}>
                    <Image
                      src={HowtoBoy}
                      className={classes.boy}
                      alt="pattern"
                    />
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
