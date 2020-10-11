import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";
import HowSection from "./HowSection";
import { Helmet } from "react-helmet";
class HostDrive extends PureComponent {
  componentDidMount() {
    const { selectHost } = this.props;
    selectHost();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Host a Blood Drive</title>
          <meta
            name="description"
            content="Hosting a blood drive is a gift of love to your community. It is fun, easy, rewarding and allows Project Lend an Arm to ensure steady and stable supply of blood and blood products to meet Nigeria's growing demand."
          />
        </Helmet>
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
