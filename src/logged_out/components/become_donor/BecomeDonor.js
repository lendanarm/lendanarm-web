import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";

class BecomeDonor extends PureComponent {
  componentDidMount() {
    const { selectBecome } = this.props;
    selectBecome();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Become a Blood Donor</title>
          <meta
            name="description"
            content="Donating blood is a great way to give a big hug to a sick child, hope to a woman in labour, another chance to a trauma victim, a smile to a cancer patient and zeal to a healthcare worker. Be a Hero. Become a blood donor today."
          />
        </Helmet>
        <HeroSection />
      </Fragment>
    );
  }
}

BecomeDonor.propTypes = {
  selectBecome: PropTypes.func.isRequired,
};

export default BecomeDonor;
