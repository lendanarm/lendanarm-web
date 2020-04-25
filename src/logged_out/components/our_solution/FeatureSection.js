import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from "@material-ui/core";
import classNames from "classnames";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import Image from "../../../shared/components/Image";
import BloodConnect from "../../dummy_data/images/world2.svg";
import BloodBank from "../../dummy_data/images/bloodbank.svg";
import BloodDonation from "../../dummy_data/images/blooddonation.svg";
import BloodDelivery from "../../dummy_data/images/blooddelivery.svg";

const styles = (theme) => ({
  featureContainer: {
    paddingLeft: "100px",
    paddingRight: "100px",
  },
});

const iconSize = 20;

const features = [
  {
    color: "#00C853",
    headline: "Feature 1",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <Image src={BloodConnect} alt="header example" />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Feature 2",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <Image src={BloodBank} alt="header example" />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Feature 3",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <Image src={BloodDonation} alt="header example" />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Feature 4",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <Image src={BloodDelivery} alt="header example" />,
    mdDelay: "0",
    smDelay: "200",
  },
];

function FeatureSection(props) {
  const { width, classes } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className={classNames(classes.featureContainer, "container-fluid")}>
        <Grid container spacing={calculateSpacing(width)}>
          {features.map((element) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              data-aos="zoom-in-up"
              data-aos-delay={
                isWidthUp("md", width) ? element.mdDelay : element.smDelay
              }
              key={element.headline}
            >
              <FeatureCard
                Icon={element.icon}
                color={element.color}
                headline={element.headline}
                text={element.text}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);
