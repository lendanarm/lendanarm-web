//Package Imports
import React, { Fragment, useState, useEffect } from "react";
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
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";
import WaveBorder from "../../../shared/components/WaveBorder";
import ColoredButton from "../../../shared/components/ColoredButton";
//Local Image Imports
import blooddonor from "../../data/images/blood_donor_love.svg";
//Redux Stuff
import { connect } from "react-redux";
import { becomeDonor } from "../../../redux/actions/emailActions";

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

function DonorForm(props) {
  const { classes, width, theme, becomeDonor, emailState } = props;
  
  const [state, setState] = useState({
    name: "",
      phoneNumber: "",
      email: "",
      address: "",
      error: null,
      message: null
  })
  useEffect(()=>{
    if(emailState.message !== null) {
      setState(state=>({...state, name: "", phoneNumber: "",
      email: "",
      address: "",}))
    }
  }, [emailState.message])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(state => ({...state, [name]: value}));
  };

   const becomeDonorHandler = (e) => {
     e.preventDefault()
    const data = {
  "from": state.email,
  "subject": "NEW DONOR ENROLLMENT",
  "text": `Name: ${state.name}, <br> Phone Number: ${state.phoneNumber}, 
  <br/> Email: ${state.email}, <br/> Address: ${state.address}`,
  "name": state.name
}
console.log(data)
becomeDonor(data)

  };
  return (
    <Fragment>
      <WaveBorder
        upperColor={theme.palette.background.default}
        lowerColor={theme.palette.primary.main}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
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
                  <Hidden smDown>
                    <Grid
                      item
                      xs={12}
                      md={5}
                      justify="center"
                      alignItems="center"
                    >
                      <img
                        src={blooddonor}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} md={6}>
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
                          Become a Donor
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <form onSubmit={becomeDonorHandler}>
                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={6} md={6}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Name"
                                  type="text"
                                  value={state.name}
                                  name="name"
                                  onChange={handleChange}
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
                                  name="email"
                                  type="email"
                                  value={state.email}
                                  onChange={handleChange}
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
                                  name="phoneNumber"
                                  placeholder="Phone number"
                                  type="number"
                                  value={state.phoneNumber}
                                  onChange={handleChange}
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
                                  placeholder="Address"
                                  type="text"
                                  name="address"
                                  value={state.address}
                                  onChange={handleChange}
                                  inputProps={{ "aria-label": "Your address" }}
                                  InputProps={{
                                    className: classes.whiteBg,
                                  }}
                                  required
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <ColoredButton
                                  color={theme.palette.common.white}
                                  variant="outlined"
                                  type="submit"
                                  style={{ width: "100%" }}
                                >
                                  Get Registered
                                </ColoredButton>
                              </Grid>
                              {emailState.message !== null && <p style={{color: 'white'}}>{emailState.message}</p>}
                            </Grid>
                          </form>
                        </Box>
                      </div>
                    </Box>
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

DonorForm.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};


const mapStateToProps = (state) => ({
  emailState: state.email,
  UI: state.UI,
});
const mapActionsToProps = {
  becomeDonor,
};

export default connect(mapStateToProps,
  mapActionsToProps)(withWidth()(withStyles(styles, { withTheme: true })(DonorForm)));
