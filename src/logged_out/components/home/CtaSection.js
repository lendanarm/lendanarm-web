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
import phone1 from "../../dummy_data/images/Phone1.png";
import phone2 from "../../dummy_data/images/Phone2.png";
import Image from "../../../shared/components/Image";
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import whoImg from "../../dummy_data/images/who.svg";
import resImg from "../../dummy_data/images/resolutionproject.png";

const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
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
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(3),
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
  headerText2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    color: "#1A1A1A"
  },
  barMargin: {
    margin: theme.spacing(1),
  },

 
  phone1: {
    width: "40%",
    marginLeft: "20px",
  },
  phone2: {
    width: "30%",
    marginLeft: "-20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "-120px",
    },
  },
  rotateImg: {
    
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      '&:hover': {
        transform: "rotate(0.5deg)",
        zIndex: -1
      }
    },
    [theme.breakpoints.up("md")]: {
      '&:hover': {
        transform: "rotate(5deg)",
        marginLeft: "-20px",
    }
    }
  },

  whiteText: {
    color: "#fff",
    maxWidth: "80%",
    position: "relative",
    left: "180px",
    bottom: "130px"
  },
  button: {
    margin: theme.spacing(1),
  },
  justifyForSm: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  redForSm: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgb(138, 3, 3)"
    }
  },
  partners: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: "50px",
  },
  partner: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%"
    }
  }
});


function CtaSection(props) {
  const { classes, theme, width } = props;
  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <div className="container-fluid lg-p-top-alt">
      <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              style={{ backgroundColor: "rgb(138, 3, 3)"}}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className={classNames("row", classes.justifyForSm)}>
                    <Grid item md={6} className={classes.rotateImg}>
                    <Hidden smDown>
                    <Image 
                        src={phone1}
                        className={classes.phone1}
                        alt="Bigger Phone"
                      />
                    </Hidden>
                      <Image 
                        src={phone2}
                        className={classes.phone2}
                        alt="Smaller Phone"
                      />
                    </Grid>
                  <Grid item xs={12} md={5} className={classes.redForSm}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          className={classes.headerText2}
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          style={{ color: "#FFF" }}
                        >
                          You can do all with the Mobile Application
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            // variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            variant="body1"
                            style={{ color: "#FFF" }}
                          >
                            Track your donations, receive your medical reports. Create a blood drive; start a virtual donation campaign; connect, chat, and form bonds. 
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          size="medium"
                          color="secondary"
                          className={classes.button}
                          startIcon={<AppleIcon />}
                        >
                          Download on App Store
                        </Button>
                        <Button
                          variant="contained"
                          size="medium"
                          color="secondary"
                          className={classes.button}
                          startIcon={<AndroidIcon />}
                        >
                          Download on Google Play
                        </Button>
                      </div>
                      <div className={classes.partners}>
                      <a href="http://innov.afro.who.int/innovators/dr-imodoye-abioro-27" target="_blank" rel="noopener">
                      <Image 
                        src={whoImg}
                        className={classes.partner}
                        alt="Smaller Phone"
                      />
                      </a>
                      <a href="https://resolutionproject.org/54th-social-venture-challenge-yields-two-new-winners-from-african-leadership-academy/" target="_blank" rel="noopener">
                      <Image 
                        src={resImg}
                        className={classes.partner}
                        alt="Smaller Phone"
                      />
                      </a>
                      </div>
                    </Box>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
}

CtaSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(CtaSection)
);

