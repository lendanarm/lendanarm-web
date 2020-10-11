//Package Imports
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import Image from "../../../shared/components/Image";
//Local Image Imports
import BloodBank from "../../data/images/bloodbank.svg";
import BloodDonation from "../../data/images/blooddonation.svg";
import BloodDelivery from "../../data/images/blooddelivery.svg";

const styles = (theme) => ({
  featureContainer: {
    paddingLeft: "100px",
    paddingRight: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "25px",
      paddingRight: "20px",
    },
  },
});

const features = [
  {
    color: "#0091EA",
    headline: "Awareness Campaigns",
    text:
      "We run blood donation awareness campaigns with extensive use of local electronic, print and social media in both English and Yoruba languages to sensitize the public on the importance of voluntary blood donation. ",
    icon: <Image src={BloodDonation} alt="awareness" />,
    mdDelay: "300",
    smDelay: "200",
  },
  {
    color: "#d50000",
    headline: "Blood Drives",
    text:
      "We hold serial mobile blood drives at multiple locations across the cities, with incentives given to voluntary donors at these drives in line with the national blood policy and World Health Organization framework.",
    icon: <Image src={BloodDelivery} alt="blood drives" />,
    mdDelay: "400",
    smDelay: "300",
  },
  {
    color: "#6200EA",
    headline: "Banking Services",
    text:
      "With state-of-the-art storage equipment and qualified personnel, blood collected at each drive are stored and retrieved when needed using our blood bank management software.",
    icon: <Image src={BloodBank} alt="laa banking" />,
    mdDelay: "500",
    smDelay: "400",
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
              md={4}
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
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);
