import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import ContactSection from "./ContactSection";
import { Helmet } from "react-helmet";

class About extends PureComponent {
  componentDidMount() {
    const { selectAbout } = this.props;
    selectAbout();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Lend An Arm - About Us | Team</title>
          <meta
            name="description"
            content="Donating blood is a great way to give a big hug to a sick child, hope to a woman in labour, another chance to a trauma victim, a smile to a cancer patient and zeal to a healthcare worker. Be a Hero. Become a blood donor today."
          />
        </Helmet>
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </Fragment>
    );
  }
}

About.propTypes = {
  selectAbout: PropTypes.func.isRequired,
};

export default About;
