import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import OurSolution from "./our_solution/ourSolution";
import BecomeDonor from "./become_donor/BecomeDonor";
import HostDrive from "./host_drive/HostDrive";

function Routing(props) {
  const { selectHome, selectBecome, selectSolution, selectHost } = props;

  return (
    <Switch>
      <PropsRoute
        path="/become-donor"
        component={BecomeDonor}
        selectBecome={selectBecome}
      />
      <PropsRoute
        path="/host-drive"
        component={HostDrive}
        selectHost={selectHost}
      />
      <PropsRoute
        path="/our-solution"
        component={OurSolution}
        selectSolution={selectSolution}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectBecome: PropTypes.func.isRequired,
  selectSolution: PropTypes.func.isRequired,
  selectHost: PropTypes.func.isRequired,
};

export default Routing;
