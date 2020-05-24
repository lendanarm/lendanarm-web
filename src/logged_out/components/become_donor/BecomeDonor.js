import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";

class BecomeDonor extends PureComponent {
  componentDidMount() {
    const { selectBecome } = this.props;
    selectBecome();
  }

  render() {
    return (
      <Fragment>
        <HeroSection />
      </Fragment>
    );
  }
}

BecomeDonor.propTypes = {
  selectBecome: PropTypes.func.isRequired,
};

export default BecomeDonor;
