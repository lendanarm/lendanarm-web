//Package Imports
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
  topMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div
      className={classNames("lg-p-top", classes.topMargin)}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Typography variant="h5" align="center" style={{ color: "#000" }}>
        Service Pricing
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={4}
            lg={4}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Blood Donor"
              pricing={
                <span>
                  FREE
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "Connect with other Donors",
                "Build a Routine",
                "Receive Medical Reports",
                "Create Virtual Campaigns",
                "Host Blood Drives",
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={4}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Hospitals (Silver)"
              pricing={
                <span>
                  FREE
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "SOS Requests",
                "Enroll donors into database",
                "Automate blood donation reminders",
                "Order blood units from LAA (pay per order)",
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={4}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Hospitals (Diamond)"
              pricing={
                <span>
                  $100
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "Silver Features",
                "Virtual Bloodbanking Software",
                "LAA Electronic Medical Records Suite",
                "LAA Verification",
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
