//Packages
import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
//Local Component Imports
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import HowToSection from "./HowToSection";
import CtaSection from "./CtaSection";

class Home extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }

  render() {
    return (
      <Fragment>
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
