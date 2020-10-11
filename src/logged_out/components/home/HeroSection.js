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
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";
//Local image imports
import bwWoman from "../../data/images/woman.png";
import woman from "../../data/images/Child.png";

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
    fontSize: "3.5rem",
    lineHeight: "4rem",
    color: "#1A1A1A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      lineHeight: "2.5rem",
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
  bwWomanPosition: {
    width: "90%",
    height: "auto",
    borderRadius: 5,
    marginBottom: "10%",
  },
  womanPosition: {
    width: "90%",
    height: "auto",
    position: "absolute",
    top: "20%",
    left: "10%",
  },
});

function HeadSection(props) {
  const { classes, width } = props;
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
                <Box
                  style={{ justifyContent: "space-between" }}
                  className="row"
                >
                  <Grid item xs={12} md={5}>
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
                          Urgent Need For Blood.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            variant="body1"
                            color="textSecondary"
                          >
                            Nigeria suffers from a damaging shortage of blood
                            with over 350, 000 pints of blood needed. People die
                            because of this need. Voluntary donors, everyday
                            heroes like you, are needed to tackle this murderous
                            menace.
                          </Typography>
                        </Box>
                        <span>
                          {isWidthUp("sm", width) ? (
                            <>
                              <span className={classes.barMargin}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="large"
                                  component={Link}
                                  // className={classes.butt}
                                  to="#"
                                >
                                  For Hospitals
                                </Button>
                              </span>
                              <span className={classes.barMargin}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  component={Link}
                                  size="large"
                                  to="#"
                                >
                                  For Blood Donors
                                </Button>
                              </span>
                            </>
                          ) : (
                            <>
                              <div className={classes.barMargin}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="large"
                                  component={Link}
                                  // className={classes.butt}
                                  to="#"
                                >
                                  For Hospitals
                                </Button>
                              </div>
                              <div className={classes.barMargin}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  size="large"
                                  component={Link}
                                  to="#"
                                >
                                  For Blood Donors
                                </Button>
                              </div>
                            </>
                          )}
                        </span>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} className={classes.imgSection}>
                    <Image
                      src={bwWoman}
                      className={classes.bwWomanPosition}
                      alt="header example"
                    />
                    <Image
                      src={woman}
                      className={classes.womanPosition}
                      alt="header example"
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
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
