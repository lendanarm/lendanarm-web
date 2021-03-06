//Package Imports
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";
import WaveBorder from "../../../shared/components/WaveBorder";
//Local Image Imports
import LAA from "../../data/images/LAA.png";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
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
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(4.5),
    marginBottom: theme.spacing(4.5),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
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
  headerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2.5rem",
    lineHeight: "3.25rem",
    color: "#1A1A1A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
  },

  waveBorder: {
    paddingTop: theme.spacing(1),
  },
  imgBackground: {
    [theme.breakpoints.down("sm")]: {
      background: `linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url(${LAA})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
});

function PPSection(props) {
  const { classes, width, theme } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box style={{ justifyContent: "center" }} className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div
                className={classNames(
                  classes.containerFix,
                  classes.imgBackground,
                  "container"
                )}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
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
                          About Us
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Project Lend an Arm is Nigeria’s first smart blood
                            bank; piloting in Oyo state of south-west Nigeria.
                            It is a youth-focused holistic blood supply solution
                            founded in 2017, aiming to solve the persistent
                            shortage of blood and blood products in Nigeria by
                            tackling the issue systematically, addressing root
                            causes. Leveraging AI, Internet of Things, digital
                            technology and drones, we aim to ensure safe blood
                            is supplied to all patients in need in less than 30
                            minutes.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={4}>
                      <img
                        src={LAA}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
            </Card>
          </Box>
        </div>
      </div>

      <WaveBorder
        upperColor={theme.palette.background.default}
        lowerColor={theme.palette.background.alternate}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

PPSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(PPSection));
