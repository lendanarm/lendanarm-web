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
  isWidthUp
} from "@material-ui/core";
import woman from "../../dummy_data/images/woman.png";
import child from "../../dummy_data/images/Child.png";
import Image from "../../../shared/components/Image";

const styles = theme => ({
  // extraLargeButtonLabel: {
  //   fontSize: theme.typography.body1.fontSize,
  //   [theme.breakpoints.up("sm")]: {
  //     fontSize: theme.typography.h6.fontSize
  //   }
  // },
  // extraLargeButton: {
  //   paddingTop: theme.spacing(1.5),
  //   paddingBottom: theme.spacing(1.5),
  //   [theme.breakpoints.up("xs")]: {
  //     paddingTop: theme.spacing(1),
  //     paddingBottom: theme.spacing(1)
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     paddingTop: theme.spacing(2),
  //     paddingBottom: theme.spacing(2)
  //   }
  // },
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
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
      paddingRight: theme.spacing(0)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4.5)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1.5)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  },
  headerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "4rem",
    lineHeight: "4.875rem",
    color: "#1A1A1A"
  },
  barMargin: {
    margin: theme.spacing(1),
  },
  imgSection: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.875rem",
    }
  },
  womanPosition: {
    maxWidth: "85%",
    marginTop: "1.875rem",
  },
  childPosition: {
    maxWidth: "85%",
    marginTop: "-10.125rem",
    marginLeft: "-3.125rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5.25rem"
    }
  },
  
  
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box style={{ justifyContent:"center" }} className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box style={{ justifyContent:"space-between" }} className="row">
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
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          Lend An Arm
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            variant="body1"
                            color="textSecondary"
                          >
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                          </Typography>
                        </Box>
                        <span>
                        <span className={classes.barMargin}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          // className={classes.butt}
                          href="/hospitals"
                        >
                          For Hospitals
                        </Button>
                        </span>
                        <span className={classes.barMargin}>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="large"
                          href="/contact"
                        >
                          For Blood Donors
                        </Button>
                        </span>
                        </span>
                      </div>
                    </Box>
                  </Grid>
                    <Grid item md={6} className={classes.imgSection}>
                      <Image 
                        src={woman}
                        className={classes.womanPosition}
                        alt="header example"
                      />
                      <Image
                        src={child}
                        className={classes.childPosition}
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
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
