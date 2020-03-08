import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import StepsToDonate from "./StepsToDonate";
import calculateSpacing from "./calculateSpacing";
import Steps from "./Steps";
import WaveBorder from "../../../shared/components/WaveBorder";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  },
  joinText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "27px",
    lineHeight: "34px"

  }
});

function HowToSection(props) {
  const { width, classes, theme } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#E5E5E5" }} >
      {/* <Typography variant="h3" align="center" className="lg-mg-bottom-alt" style={{ color: "#8A0303"}}>
        Join the Movement
      </Typography> */}
      <Steps />
      <div className={classNames("container-fluid", classes.containerFix)} style={{ paddingBottom: "50px" }}>
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
              title="First Step"
              features={["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]}
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
              title="Second Step"
              highlighted
              features={["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]}
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
              title="Third Step"
              features={["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]}
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
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(HowToSection)
);
