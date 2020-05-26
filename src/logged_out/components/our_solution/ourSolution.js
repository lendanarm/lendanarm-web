//Package Imports
import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
//Local Component Imports
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import PremiumSolutions from "./PremiumSolutions";

class OurSolution extends PureComponent {
  componentDidMount() {
    const { selectSolution } = this.props;
    selectSolution();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Our Solution</title>
          <meta
            name="description"
            content="Our innovation is a novel integrated blood supply system utilizing two point-of-care technologies, Internet of Things and beyond-line-of-sight delivery drones to ensure delivery of blood in <30 minutes."
          />
        </Helmet>
        <HeroSection />
        <FeatureSection />
        <PremiumSolutions />
        <PricingSection />
      </Fragment>
    );
  }
}

OurSolution.propTypes = {
  selectSolution: PropTypes.func.isRequired,
};

export default OurSolution;
