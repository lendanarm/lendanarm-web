import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeadSection from "../home/HeadSection";
import InfoSection from "../home/InfoSection";
import HowToSection from "../home/HowToSection";
import CtaSection from "../home/CtaSection";

class OurSolution extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }

  render() {
    return (
      <Fragment>
        {/* <HeadSection /> */}
        {/* <InfoSection />
        <HowToSection /> */}
        {/* <CtaSection /> */}
      </Fragment>
    );
  }
}

OurSolution.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default OurSolution;
