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
import infographic from "../../dummy_data/images/illustration.svg";
import Image from "../../../shared/components/Image";

const styles = (theme) => ({
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
    fontSize: "4rem",
    lineHeight: "4.875rem",
    color: "#8A0303",
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
  },
  infographic: {
    maxWidth: "85%",
  },
});

function HeroSection(props) {
  const { classes, theme, width } = props;
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
                            Join your colleagues, classmates and friends on
                            LendAnArm. There’s no substitute for blood. When a
                            patient receives blood, it was given in advance by a
                            generous donor. Join the #GIVE movement.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} className={classes.imgSection}>
                    <Image
                      src={infographic}
                      className={classes.infographic}
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

HeroSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeroSection)
);
