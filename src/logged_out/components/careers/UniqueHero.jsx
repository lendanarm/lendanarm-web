//Package Imports
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
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

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
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
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
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
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      lineHeight: "1.2rem",
    },
  },
});

function PPSection(props) {
  const { classes, width, theme, data } = props;
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
                  <Grid item xs={12} md={12}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box
                        mb={3}
                        style={{ justifyContent: "center", display: "flex" }}
                      >
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          {data.position}
                        </Typography>
                      </Box>

                      <div>
                        <Box mb={2}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <LocationOnIcon
                                color="primary"
                                style={{ marginRight: "10px" }}
                              />

                              <Typography
                                variant="body1"
                                color="textSecondary"
                              >{`${data.remote ? "Remote" : "Non-remote"} - ${
                                data.location
                              }`}</Typography>
                            </div>
                            <div style={{ display: "flex" }}>
                              <WorkOutlineIcon
                                color="primary"
                                style={{ marginRight: "10px" }}
                              />

                              <Typography variant="body1" color="textSecondary">
                                {data.type}
                              </Typography>
                            </div>
                          </div>
                          <Typography variant="body1" color="textSecondary">
                            {data.jobDescription.intro}
                          </Typography>
                        </Box>
                        <Box mb={2}>
                          <Typography
                            className={classes.headerText}
                            variant={isWidthUp("lg", width) ? "h4" : "h5"}
                          >
                            Responsibilities
                          </Typography>
                          {data.jobDescription.responsibilities.map(
                            (responsibility) => (
                              <Typography
                                variant="body1"
                                color="textSecondary"
                                key={responsibility}
                              >
                                {responsibility}
                              </Typography>
                            )
                          )}
                        </Box>
                        <Box mb={2}>
                          <Box mb={2}>
                            <Typography
                              className={classes.headerText}
                              variant={isWidthUp("lg", width) ? "h4" : "h5"}
                            >
                              Requirements
                            </Typography>
                          </Box>

                          {data.requirements.certification.length !== 0 && (
                            <>
                              <Box mb={1}>
                                <Typography
                                  variant={isWidthUp("lg", width) ? "h5" : "h6"}
                                >
                                  Certification
                                </Typography>
                              </Box>
                              {data.requirements.certification.map(
                                (certification) => (
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    key={certification}
                                  >
                                    {certification}
                                  </Typography>
                                )
                              )}
                            </>
                          )}
                          {data.requirements.experience.length !== 0 && (
                            <>
                              <Box mb={1}>
                                <Typography
                                  variant={isWidthUp("lg", width) ? "h5" : "h6"}
                                >
                                  Experience
                                </Typography>
                              </Box>
                              {data.requirements.experience.map(
                                (experience) => (
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    key={experience}
                                  >
                                    {experience}
                                  </Typography>
                                )
                              )}
                            </>
                          )}
                          {data.requirements.skillsAbilities.length !== 0 && (
                            <>
                              <Typography
                                variant={isWidthUp("lg", width) ? "h5" : "h6"}
                              >
                                Skills and Abilities
                              </Typography>
                              {data.requirements.skillsAbilities.map(
                                (skillsAbility) => (
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    key={skillsAbility}
                                  >
                                    {skillsAbility}
                                  </Typography>
                                )
                              )}
                            </>
                          )}
                          {data.requirements.personalattributes.length !==
                            0 && (
                            <>
                              <Typography
                                variant={isWidthUp("lg", width) ? "h5" : "h6"}
                              >
                                Personal Attributes
                              </Typography>
                              {data.requirements.personalattributes.map(
                                (personalattribute) => (
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    key={personalattribute}
                                  >
                                    {personalattribute}
                                  </Typography>
                                )
                              )}
                            </>
                          )}
                          {data.requirements.workEnvironment.length !== 0 && (
                            <>
                              <Typography
                                variant={isWidthUp("lg", width) ? "h5" : "h6"}
                              >
                                Work Environment
                              </Typography>
                              {data.requirements.workEnvironment.map(
                                (environment) => (
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    key={environment}
                                  >
                                    {environment}
                                  </Typography>
                                )
                              )}
                            </>
                          )}
                          {data.requirements.benefits &&
                            data.requirements.benefits.length !== 0 && (
                              <>
                                <Typography
                                  variant={isWidthUp("lg", width) ? "h5" : "h6"}
                                >
                                  Benefits
                                </Typography>
                                {data.requirements.benefits.map((benefit) => (
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    key={benefit}
                                  >
                                    {benefit}
                                  </Typography>
                                ))}
                              </>
                            )}
                        </Box>
                        <Box mb={2}>
                          <Typography
                            className={classes.headerText}
                            variant={isWidthUp("lg", width) ? "h4" : "h5"}
                          >
                            How to Apply
                          </Typography>

                          <Typography variant="body1" color="textSecondary">
                            To apply for this role, mail your CV and cover
                            letter to{" "}
                            <a
                              href="mailto://hello@lendanarm.ng"
                              style={{
                                textDecoration: "none",
                                color: theme.palette.primary.main,
                              }}
                            >
                              hello@lendanarm.ng
                            </a>
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
    </Fragment>
  );
}

PPSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(PPSection));
