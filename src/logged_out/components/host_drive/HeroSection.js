//Packages
import React from "react";
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
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//MUI Icons
import ApartmentIcon from "@material-ui/icons/Apartment";
//Local Component Imports
import Image from "../../../shared/components/Image";
//Local Image Imports
import pattern from "../../data/images/Pattern.png";
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
  patternPosition: {
    width: "90%",
    height: "auto",
    borderRadius: 5,
    marginBottom: "3%",
  },
  womanPosition: {
    width: "90%",
    height: "auto",
    position: "absolute",
    top: "5%",
    right: "13%",
  },
});

function HeadSection(props) {
  const { classes, width } = props;

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
              <Box style={{ justifyContent: "space-between" }} className="row">
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
                        Why host a blood drive?
                      </Typography>
                    </Box>
                    <div>
                      <Box mb={2}>
                        <Typography
                          // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                          variant="body1"
                          color="textSecondary"
                        >
                          Hosting a blood drive is a gift of love to your
                          community. It is fun, easy and rewarding.
                        </Typography>
                      </Box>
                      <span>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          component={Link}
                          to="#host"
                          endIcon={<ApartmentIcon />}
                        >
                          Host Drive
                        </Button>
                      </span>
                    </div>
                  </Box>
                </Grid>
                <Grid item md={6} className={classes.imgSection}>
                  <Image
                    src={pattern}
                    className={classes.patternPosition}
                    alt="pattern"
                  />
                  <Image
                    src={woman}
                    className={classes.womanPosition}
                    alt="woman"
                  />
                </Grid>
              </Box>
            </div>
          </Card>
        </Box>
      </div>
    </div>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
