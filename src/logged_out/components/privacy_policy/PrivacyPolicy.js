import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import PPSection from "./PPSection";

class PrivacyPolicy extends PureComponent {
  componentDidMount() {
    const { selectPrivacyPolicy } = this.props;
    selectPrivacyPolicy();
  }

  render() {
    return (
      <Fragment>
        <PPSection />
      </Fragment>
    );
  }
}

PrivacyPolicy.propTypes = {
  selectPrivacyPolicy: PropTypes.func.isRequired,
};

export default PrivacyPolicy;
