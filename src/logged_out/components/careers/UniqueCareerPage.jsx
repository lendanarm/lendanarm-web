import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import UniqueHero from "./UniqueHero";
import CurrentOpenings from "./CurrentOpenings";
import { openings } from "./openings";

class Careers extends PureComponent {
  state = { data: null };
  componentDidMount() {
    const { selectCareers, match } = this.props;
    selectCareers();
    const data = openings.filter((data) => data.slug === match.params.slug);
    this.setState({ data: data[0] });
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
        {this.state.data !== null && <UniqueHero data={this.state.data} />}
      </Fragment>
    );
  }
}

Careers.propTypes = {
  selectCareers: PropTypes.func.isRequired,
};

export default Careers;
