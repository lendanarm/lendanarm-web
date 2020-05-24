import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";
import HowSection from "./HowSection";
class HostDrive extends PureComponent {
  componentDidMount() {
    const { selectHost } = this.props;
    selectHost();
  }

  render() {
    return (
      <Fragment>
        <HeroSection />
        <HowSection />
      </Fragment>
    );
  }
}

HostDrive.propTypes = {
  selectHost: PropTypes.func.isRequired,
};

export default HostDrive;
