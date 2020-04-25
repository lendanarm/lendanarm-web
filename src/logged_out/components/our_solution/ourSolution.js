import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";

class OurSolution extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }

  render() {
    return (
      <Fragment>
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        {/* <CtaSection /> */}
      </Fragment>
    );
  }
}

OurSolution.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default OurSolution;
