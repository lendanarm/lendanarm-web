import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import RegisterDialog from "./RegisterDialog";
import TermsOfServiceDialog from "./TermsOfServiceDialog";
import LoginDialog from "./LoginDialog";
import DemoDialog from "./DemoDialog";
import DonorDialog from "./DonorDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";
import ModalBackdrop from "../../../shared/components/ModalBackdrop";

class DialogSelector extends PureComponent {
  state = {
    loginStatus: null,
    registerStatus: null,
  };

  setRegisterStatus = (registerStatus) => {
    this.setState({ registerStatus });
  };

  setLoginStatus = (loginStatus) => {
    this.setState({ loginStatus });
  };

  onClose = () => {
    const { onClose } = this.props;
    this.setState({ loginStatus: null, registerStatus: null });
    onClose();
  };

  printDialog = () => {
    const {
      dialogOpen,
      openTermsDialog,
      openRegisterDialog,
      openLoginDialog,
      openChangePasswordDialog,
      openDemoDialog,
      openDonorDialog
    } = this.props;
    const { loginStatus, registerStatus } = this.state;
    switch (dialogOpen) {
      case "register":
        return (
          <RegisterDialog
            onClose={this.onClose}
            openTermsDialog={openTermsDialog}
            status={registerStatus}
            setStatus={this.setRegisterStatus}
          />
        );
      case "termsOfService":
        return <TermsOfServiceDialog onClose={openRegisterDialog} />;
      case "login":
        return (
          <LoginDialog
            onClose={this.onClose}
            openChangePasswordDialog={openChangePasswordDialog}
          />
        );
      case "demo":
        return (
          <DemoDialog
            onClose={this.onClose}
            openChangePasswordDialog={openChangePasswordDialog}
          />
        );
      case "donor":
        return (
          <DonorDialog
            onClose={this.onClose}
            openChangePasswordDialog={openChangePasswordDialog}
          />
        );
      case "changePassword":
        return (
          <ChangePasswordDialog
            setLoginStatus={this.setLoginStatus}
            onClose={openLoginDialog}
          />
        );
      default:
    }
  };

  render() {
    const { dialogOpen } = this.props;
    return (
      <Fragment>
        {dialogOpen && <ModalBackdrop open />}
        {this.printDialog()}
      </Fragment>
    );
  }
}

DialogSelector.propTypes = {
  dialogOpen: PropTypes.string,
  openLoginDialog: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  openDemoDialog: PropTypes.func.isRequired,
  openDonorDialog: PropTypes.func.isRequired,
};

export default DialogSelector;
