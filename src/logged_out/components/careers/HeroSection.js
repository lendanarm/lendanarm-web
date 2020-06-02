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
import WhatCard from "./WhatCard";
import calculateSpacing from "../our_solution/calculateSpacing";
//Local Image Imports
import LAA from "../../data/images/LAA.png";
import BloodBank from "../../data/images/bloodbank.svg";
import BloodDonation from "../../data/images/blooddonation.svg";
import BloodDelivery from "../../data/images/blooddelivery.svg";
import medicaldental from "../../data/images/medicaldental.svg";
import innovative from "../../data/images/innovative.svg";
import hangout from "../../data/images/hangout.svg";
import satisfaction from "../../data/images/satisfaction.svg";
import salary from "../../data/images/salary.svg";
import project from "../../data/images/project.svg";

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
  headerText2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2rem",
    lineHeight: "2rem",
    color: "#1A1A1A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      lineHeight: "1.2rem",
    },
  },
});

const features = [
  {
    color: "#0091EA",
    headline: "Health, dental and optical plans.",
    icon: <Image src={medicaldental} alt="awareness" />,
    mdDelay: "300",
    smDelay: "200",
  },
  {
    color: "#d50000",
    headline:
      "A huge learning culture - From knowledge sharing sessions to training events.",
    icon: <Image src={innovative} alt="blood drives" />,
    mdDelay: "400",
    smDelay: "300",
  },
  {
    color: "#6200EA",
    headline: "Quarterly hangouts and healthy work environment.",
    icon: <Image src={hangout} alt="laa banking" />,
    mdDelay: "500",
    smDelay: "400",
  },
  {
    color: "#0091EA",
    headline: "Derive satisfaction from working to save and improve lives.",
    icon: <Image src={satisfaction} alt="awareness" />,
    mdDelay: "300",
    smDelay: "200",
  },
  {
    color: "#d50000",
    headline: "Competitive remuneration and salary.",
    icon: <Image src={salary} alt="blood drives" />,
    mdDelay: "400",
    smDelay: "300",
  },
  {
    color: "#6200EA",
    headline:
      "We are Med-Tech. Work with some of the most innovative minds in the industry.",
    icon: <Image src={project} alt="laa banking" />,
    mdDelay: "500",
    smDelay: "400",
  },
];

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
              <div className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
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
                          Do work that actually matters.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Here at LendAnArm, we look for ways to enhance
                            communal efforts and leverage technology to save and
                            improve the lives of millions of people. Join us and
                            do work that actually matters.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={2}>
                        <Typography
                          className={classes.headerText2}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          What's in it for you?
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    spacing={calculateSpacing(width)}
                    justify="center"
                  >
                    {features.map((element) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        data-aos="zoom-in-up"
                        data-aos-delay={
                          isWidthUp("md", width)
                            ? element.mdDelay
                            : element.smDelay
                        }
                        key={element.headline}
                      >
                        <WhatCard
                          Icon={element.icon}
                          color={element.color}
                          headline={element.headline}
                          text={element.text}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

PPSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(PPSection));
