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
            content="Nigeria suffers from a damaging shortage of blood with over 350, 000 pints of blood needed. People die because of this need. Voluntary donors, everyday heroes like you, are needed to tackle this murderous menace."
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
