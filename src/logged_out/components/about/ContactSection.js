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
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";
import WaveBorder from "../../../shared/components/WaveBorder";
import ColoredButton from "../../../shared/components/ColoredButton";
//Local Image Imports
import contactus from "../../data/images/contactus.svg";

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
    backgroundColor: theme.palette.primary.main,
  },
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
  container: {
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
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
  },

  waveBorder: {
    paddingTop: theme.spacing(1),
  },
});

function PPSection(props) {
  const { classes, width, theme } = props;
  return (
    <Fragment>
      <div className={classNames(classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box style={{ justifyContent: "center" }} className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={1}>
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
                          Get in Touch
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <form>
                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={6} md={6}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Name"
                                  type="text"
                                  inputProps={{ "aria-label": "Your name" }}
                                  InputProps={{
                                    className: classes.whiteBg,
                                  }}
                                  required
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12} sm={6} md={6}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Email"
                                  type="email"
                                  inputProps={{ "aria-label": "Your email" }}
                                  InputProps={{
                                    className: classes.whiteBg,
                                  }}
                                  required
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Phone number"
                                  type="number"
                                  inputProps={{ "aria-label": "Your name" }}
                                  InputProps={{
                                    className: classes.whiteBg,
                                  }}
                                  required
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Your message here"
                                  inputProps={{ "aria-label": "Your name" }}
                                  InputProps={{
                                    className: classes.whiteBg,
                                  }}
                                  required
                                  fullWidth
                                  rows={4}
                                  multiline
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <ColoredButton
                                  color={theme.palette.common.white}
                                  variant="outlined"
                                  type="submit"
                                  style={{ width: "100%" }}
                                >
                                  Send Message
                                </ColoredButton>
                              </Grid>
                            </Grid>
                          </form>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      src={contactus}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
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
