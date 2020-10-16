//Packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
//MUI Icons
import ApartmentIcon from "@material-ui/icons/Apartment";
//Local Component Imports
import Image from "../../../shared/components/Image";
//Local Image Imports
import ImpactIllustration from "../../data/images/impactillus.svg";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(4),
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
    marginTop: theme.spacing(6),
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
    fontSize: "2.5rem",
    lineHeight: "3.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
  },
  barMargin: {
    margin: theme.spacing(1),
  },
  imgSection: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.875rem",
    },
    position: "relative",
  },
  impactIllusPosition: {
    width: "100%",
    // height: "auto",
    // borderRadius: 5,
    // marginBottom: "3%",
  },
  womanPosition: {
    width: "90%",
    height: "auto",
    position: "absolute",
    top: "5%",
    right: "13%",
  },
});

function HeroSection(props) {
  const { classes, width } = props;
  useEffect(() => {
    const counters = document.querySelectorAll("#counter");
    let speed = 300;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });
  return (
    <div className={classNames("lg-p-top", classes.wrapper)}>
      <div className={classNames("container-fluid", classes.container)}>
        <Box style={{ justifyContent: "center" }} className="row">
          <Card
            className={classes.card}
            data-aos-delay="200"
            data-aos="zoom-in"
          >
            <div className={classNames(classes.containerFix, "container")}>
              <Box
                style={{ justifyContent: "center", alignItems: "center" }}
                className="row"
              >
                <Grid item md={5} className={classes.imgSection}>
                  <Image
                    src={ImpactIllustration}
                    className={classes.impactIllusPosition}
                    alt="pattern"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    height="100%"
                  >
                    <Box mb={4} mt={isWidthDown("md", width) ? 2 : 0}>
                      <Typography
                        className={classes.headerText}
                        variant={isWidthUp("lg", width) ? "h4" : "h5"}
                      >
                        Our Impact Metrics
                      </Typography>
                    </Box>
                    <div>
                      <Box mb={2}>
                        <Typography
                          // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                          variant="body1"
                          color="textSecondary"
                        >
                          Since our inception, we have made impressive strides,
                          with our venture directly responsible for saving 450
                          lives since inception. We are an innovative venture,
                          fast building with international renown; acknowledged
                          by the WHO, UNAIDS and the Government of Japan. <br />
                          <span style={{ color: "#8A0303" }}>
                            We've not done alot, hopefully with you, we would
                            get to do even more.
                          </span>
                        </Typography>
                      </Box>
                      <Grid
                        container
                        spacing={3}
                        data-aos-delay="500"
                        data-aos="fade-up-right"
                        mt={2}
                      >
                        <Grid item xs={6}>
                          <Typography
                            className={classes.metricsText}
                            id="counter"
                            data-target="764"
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          >
                            0
                          </Typography>
                          <p style={{ color: "#8A0303" }}>
                            Blood Units Distributed
                          </p>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            className={classes.metricsText}
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                            id="counter"
                            data-target="14"
                          >
                            0
                          </Typography>
                          <p style={{ color: "#8A0303" }}>Trusted Partners</p>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            className={classes.metricsText}
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                            id="counter"
                            data-target="3"
                          >
                            0
                          </Typography>
                          <p style={{ color: "#8A0303" }}>Awards won</p>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            className={classes.metricsText}
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                            id="counter"
                            data-target="600"
                          >
                            0
                          </Typography>
                          <p style={{ color: "#8A0303" }}>Blood Donors</p>
                        </Grid>
                      </Grid>
                    </div>
                  </Box>
                </Grid>
              </Box>
            </div>
          </Card>
        </Box>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeroSection)
);
