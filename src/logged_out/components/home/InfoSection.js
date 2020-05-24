//Package imports
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";
import WaveBorder from "../../../shared/components/WaveBorder";
//Local Image Imports
import pattern from "../../data/images/Pattern.png";
import drone from "../../data/images/boy.png";

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
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
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
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
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
  imgSection: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.875rem",
    },
    position: "relative",
  },
  patternPosition: {
    width: "90%",
    height: "auto",
    borderRadius: 5,
    marginBottom: "10%",
  },
  boyPosition: {
    width: "90%",
    height: "auto",
    position: "absolute",
    top: "20%",
    left: "10%",
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
              data-aos-delay="500"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Hidden smDown>
                    <Grid item md={6} className={classes.imgSection}>
                      <Image
                        src={pattern}
                        className={classes.patternPosition}
                        alt="dot patterns"
                      />
                      <Image
                        src={drone}
                        className={classes.boyPosition}
                        alt="a drone"
                      />
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
                          <Typography variant="body1" color="textSecondary">
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
