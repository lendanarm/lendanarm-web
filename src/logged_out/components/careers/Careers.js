import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection";
import CurrentOpenings from "./CurrentOpenings";

class Careers extends PureComponent {
  componentDidMount() {
    const { selectCareers } = this.props;
    selectCareers();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Lend An Arm - Careers</title>
          <meta
            name="description"
            content="Donating blood is a great way to give a big hug to a sick child, hope to a woman in labour, another chance to a trauma victim, a smile to a cancer patient and zeal to a healthcare worker. Be a Hero. Become a blood donor today."
          />
        </Helmet>
        <HeroSection />
        <CurrentOpenings />
      </Fragment>
    );
  }
}

Careers.propTypes = {
  selectCareers: PropTypes.func.isRequired,
};

export default Careers;
