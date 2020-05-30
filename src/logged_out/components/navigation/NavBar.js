//Package Imports
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//MUI Component Imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
//MUI Icon Imports
import MenuIcon from "@material-ui/icons/Menu";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ApartmentIcon from "@material-ui/icons/Apartment";
import OpacityIcon from "@material-ui/icons/Opacity";
//Local Component Imports
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    fontStyle: theme.typography.h6.fontStyle,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive !important",
    fontWeight: 700,
    webkitUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  barMargin: {
    margin: theme.spacing(1),
  },
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "/our-solution",
      name: "Our Solution",
      icon: <FavoriteBorderIcon className="text-white" />,
    },
    {
      link: "/host-drive",
      name: "Host a blood drive",
      icon: <ApartmentIcon className="text-white" />,
    },
    {
      link: "/become-donor",
      name: "Become a donor",
      icon: <OpacityIcon className="text-white" />,
    },
    {
      name: "Sign in",
      onClick: openLoginDialog,
      variant: "outlined",
      icon: <LockOpenIcon className="text-white" />,
    },
    {
      name: "Join now",
      variant: "contained",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link to="/" className={classes.noDecoration}>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                LendAnArm
              </Typography>
            </Link>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration + " " + classes.barMargin}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <span className={classes.barMargin}>
                    <Button
                      variant={element.variant}
                      color="primary"
                      size="large"
                      onClick={element.onClick}
                      classes={{ text: classes.menuButtonText }}
                      key={element.name}
                    >
                      {element.login ? element.name : element.name}
                    </Button>
                  </span>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);
