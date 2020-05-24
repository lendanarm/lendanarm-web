//Package Imports
import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
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
