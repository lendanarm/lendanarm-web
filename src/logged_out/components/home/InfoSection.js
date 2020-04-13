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
} from "@material-ui/core";
import pattern from "../../dummy_data/images/Pattern.png";
import boy from "../../dummy_data/images/boy.png";
import blankCanvas from "../../dummy_data/images/blankCanvas.png";
import Image from "../../../shared/components/Image";
import WaveBorder from "../../../shared/components/WaveBorder";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(2),
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
  patternPosition: {
    maxWidth: "80%",
  },
  boyPosition: {
    maxWidth: "80%",
    marginTop: "-180px",
    marginLeft: "50px",
  },
  canvasPosition: {
    maxWidth: "80%",
    marginTop: "-130.2px",
    marginLeft: "166px",
  },
  whiteText: {
    color: "#fff",
    width: "70%",
    position: "relative",
    left: "180px",
    bottom: "130px",
  },
});

function InfoSection(props) {
  const { classes, theme, width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top-alt">
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Hidden smDown>
                    <Grid item md={6}>
                      <Image
                        src={pattern}
                        className={classes.patternPosition}
                        alt="dot patterns"
                      />
                      <Image
                        src={boy}
                        className={classes.boyPosition}
                        alt="a boy"
                      />
                      <Hidden smDown>
                        <Image
                          src={blankCanvas}
                          className={classes.canvasPosition}
                          alt="blank canvas"
                        />

                        <Typography
                          variant="body1"
                          className={classes.whiteText}
                        >
                          Our real life heroes are on an all-out mission to save
                          lives by donating blood. Be part of this. Join the
                          movement.
                        </Typography>
                      </Hidden>
                    </Grid>
                  </Hidden>
                  <Grid item sm={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          className={classes.headerText2}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          Envoys on a mission to save lives.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            variant="body1"
                            color="textSecondary"
                          >
                            We maintain a closely regulated chain of smart blood
                            banks, delivery motorcycles and drone fleets to
                            ensure safe supply and fast delivery of blood, blood
                            products and other essential medical products to
                            Hospitals across Nigeria. As we deliver within
                            minutes, our hospital and blood bank partners can
                            depend on us.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                </Box>
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
    </div>
  );
}

InfoSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(InfoSection)
);
