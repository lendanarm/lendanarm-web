import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

class Impact extends PureComponent {
  componentDidMount() {
    const { selectImpact } = this.props;
    selectImpact();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Lend An Arm - Impact</title>
          <meta
            name="description"
            content="Donating blood is a great way to give a big hug to a sick child, hope to a woman in labour, another chance to a trauma victim, a smile to a cancer patient and zeal to a healthcare worker. Be a Hero. Become a blood donor today."
          />
        </Helmet>
        <h1>Hi</h1>
      </Fragment>
    );
  }
}

Impact.propTypes = {
  selectImpact: PropTypes.func.isRequired,
};

export default Impact;
