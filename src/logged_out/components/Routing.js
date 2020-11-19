import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import OurSolution from "./our_solution/ourSolution";
import BecomeDonor from "./become_donor/BecomeDonor";
import HostDrive from "./host_drive/HostDrive";
import About from "./about/About";
import Careers from "./careers/Careers";
import Impact from "./impact/Impact";
import PrivacyPolicy from "./privacy_policy/PrivacyPolicy";

function Routing(props) {
  const {
    selectHome,
    selectBecome,
    selectSolution,
    selectHost,
    selectAbout,
    selectCareers,
    selectImpact,
    selectPrivacyPolicy,
    openDemoDialog,
    openDonorDialog
  } = props;

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
      <PropsRoute path="/about" component={About} selectAbout={selectAbout} />
      <PropsRoute
        path="/careers"
        component={Careers}
        selectCareers={selectCareers}
      />
      <PropsRoute
        path="/impact"
        component={Impact}
        selectImpact={selectImpact}
      />
      <PropsRoute
        path="/privacy-policy"
        component={PrivacyPolicy}
        selectPrivacyPolicy={selectPrivacyPolicy}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} openDemoDialog={openDemoDialog} openDonorDialog={openDonorDialog}/>
    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectBecome: PropTypes.func.isRequired,
  selectSolution: PropTypes.func.isRequired,
  selectHost: PropTypes.func.isRequired,
  openDemoDialog: PropTypes.func.isRequired,
  openDonorDialog: PropTypes.func.isRequired,
};

export default Routing;
