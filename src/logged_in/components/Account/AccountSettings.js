import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import SettingsArea from "./SettingsArea";
import UserDataArea from "./UserDataArea";
import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";

class AccountSettings extends PureComponent {
  componentDidMount() {
    const { selectSettings } = this.props;
    selectSettings();
  }

  render() {
    const {
      CardChart,
      statistics,
      toggleAccountActivation,
      pushMessageToSnackbar,
      targets,
      isAccountActivated,
    } = this.props;
    return (
      <Fragment>
        <StatisticsArea CardChart={CardChart} data={statistics} />
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Your Account
          </Typography>
        </Box>
        <AccountInformationArea
          isAccountActivated={isAccountActivated}
          toggleAccountActivation={toggleAccountActivation}
        />
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Settings
          </Typography>
        </Box>
        <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
        <UserDataArea
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
        />
      </Fragment>
    );
  }
}

AccountSettings.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectSettings: PropTypes.func.isRequired,
};

export default AccountSettings;
