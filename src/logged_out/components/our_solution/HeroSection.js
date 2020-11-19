//Package Imports
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";
//Local Image Imports
import infographic from "../../data/images/illustration.svg";

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
  },
  infographic: {
    maxWidth: "85%",
  },
});

function HeroSection(props) {
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
                          Blood Donor Community
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            variant="body1"
                            color="textSecondary"
                          >
                            Lend an Arm is a holistic blood supply solution. We
                            are committed to increasing voluntary blood donation
                            in Nigeria and delivering good quality blood and
                            blood products to patients in dire need, especially
                            those in rural and otherwise hard-to-reach areas.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} className={classes.imgSection}>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/0oByKcHBW6w?controls=0"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      style={{ maxWidth: "100%" }}
                    ></iframe>
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

HeroSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeroSection)
);
