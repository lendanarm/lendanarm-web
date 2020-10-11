import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
  },
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    dialogOpen: null,
    cookieRulesDialogOpen: false,
  };

  componentDidMount() {}

  selectHome = () => {
    smoothScrollTop();
    document.title =
      "LendAnArm - Blood Donor Community | Smart Blood Blood-Banking";
    this.setState({ selectedTab: "Home" });
  };

  selectHost = () => {
    smoothScrollTop();
    document.title = "LendAnArm - Host a Blood Drive";
    this.setState({ selectedTab: "Host Drive" });
  };

  selectBecome = () => {
    smoothScrollTop();
    document.title = "LendAnArm - Become a Donor";
    this.setState({ selectedTab: "Become a Donor" });
  };

  selectSolution = () => {
    smoothScrollTop();
    document.title = "LendAnArm - Our Solution";
    this.setState({ selectedTab: "Our Solution" });
  };

  selectAbout = () => {
    smoothScrollTop();
    document.title = "Lend An Arm - About Us | Team";
    this.setState({ selectedTab: "About" });
  };

  selectCareers = () => {
    smoothScrollTop();
    document.title = "Lend An Arm - Careers";
    this.setState({ selectedTab: "Careers" });
  };

  selectImpact = () => {
    smoothScrollTop();
    document.title = "Lend An Arm - Impact";
    this.setState({ selectedTab: "Impact" });
  };

  selectPrivacyPolicy = () => {
    smoothScrollTop();
    document.title = "Lend An Arm - Privacy Policy";
    this.setState({ selectedTab: "Privacy Policy" });
  };

  openLoginDialog = () => {
    this.setState({ dialogOpen: "login", mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false,
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: "termsOfService" });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = (tab) => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: "changePassword" });
  };

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      blogPosts,
      dialogOpen,
      cookieRulesDialogOpen,
    } = this.state;
    return (
      <div className={classes.wrapper}>
        {!cookieRulesDialogOpen && (
          <CookieConsent
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        )}
        <DialogSelector
          openLoginDialog={this.openLoginDialog}
          dialogOpen={dialogOpen}
          onClose={this.closeDialog}
          openTermsDialog={this.openTermsDialog}
          openRegisterDialog={this.openRegisterDialog}
          openChangePasswordDialog={this.openChangePasswordDialog}
        />
        <CookieRulesDialog
          open={cookieRulesDialogOpen}
          onClose={this.handleCookieRulesDialogClose}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
        />
        <Routing
          blogPosts={blogPosts}
          selectHome={this.selectHome}
          selectBlog={this.selectBlog}
          selectSolution={this.selectSolution}
          selectBecome={this.selectBecome}
          selectHost={this.selectHost}
          selectAbout={this.selectAbout}
          selectCareers={this.selectCareers}
          selectImpact={this.selectImpact}
          selectPrivacyPolicy={this.selectPrivacyPolicy}
        />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
