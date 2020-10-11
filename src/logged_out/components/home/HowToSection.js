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
import StepsToDonate from "./StepsToDonate";
import calculateSpacing from "./calculateSpacing";
import Steps from "./Steps";
import WaveBorder from "../../../shared/components/WaveBorder";

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
});

function HowToSection(props) {
  const { width, classes, theme } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#E5E5E5" }}>
      <Steps />
      <div
        className={classNames("container-fluid", classes.containerFix)}
        style={{ paddingBottom: "50px" }}
      >
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <StepsToDonate
              title="Registration"
              features={[
                "On-site personnel would obtain demographic data and valid identification such as national or school ID, voter’s card, driver’s license or international passport.",
              ]}
              style={{ height: "100%" }}
            />
          </Grid>

          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            md={4}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <StepsToDonate
              title="Screening"
              highlighted
              features={[
                "To ensure a safe blood donation process for donors and safe blood for recipients, our phlebotomist would check your vitals and ask you a few questions about your medical history. ",
              ]}
              style={{ height: "100%" }}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            md={4}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <StepsToDonate
              title="Donation"
              features={[
                "After you obtain clearance to participate in a blood donation event, our phlebotomist(s) would go on to collect your blood while observing necessary aseptic precautions.",
              ]}
              style={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </div>
      <WaveBorder
        upperColor={theme.palette.background.alternative}
        lowerColor={theme.palette.primary.main}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </div>
  );
}

HowToSection.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(HowToSection)
);
