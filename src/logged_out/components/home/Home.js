//Packages
import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
//Local Component Imports
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import HowToSection from "./HowToSection";
import CtaSection from "./CtaSection";
import { Helmet } from "react-helmet";

class Home extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            Nigeria's First Smart Blood Bank and Blood Donor Community
          </title>
          <meta
            name="description"
            content="Project LendAnArm is Nigeria's first blood donor community and smart blood bank facility, a novel integrated blood supply system utilizing two point-of-care technologies, Internet of Things and beyond-line-of-sight delivery drones to ensure delivery of blood to healthcare facilities in less than 30 minutes."
          />
        </Helmet>
        <HeroSection />
        <InfoSection />
        <HowToSection />
        <CtaSection />
      </Fragment>
    );
  }
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
