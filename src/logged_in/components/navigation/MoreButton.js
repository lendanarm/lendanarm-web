import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//MUI Stuff
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//Icons
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

class MoreButton extends Component {
  state = {
    anchorEl: null,
  };

  handleOpen = (e) => {
    this.setState({ anchorEl: e.target });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, logout } = this.props;
    const anchorEl = this.state.anchorEl;

    const moreMenuItems = [
      {
        itemId: "1",
        title: "Settings",
        link: "/c/account_settings",
        icon: <SettingsIcon style={{ marginRight: 10 }} />,
      },
      {
        itemId: "2",
        title: "Beta",
        link: "/c/beta",
        icon: <AllInclusiveIcon style={{ marginRight: 10 }} />,
      },
      {
        itemId: "3",
        title: "Logout",
        onClick: { logout },
        icon: <PowerSettingsNewIcon style={{ marginRight: 10 }} />,
      },
    ];

    let moreMenuMarkup = moreMenuItems.map((item) => {
      return item.link ? (
        <MenuItem key={item.itemId} onClick={this.handleClose}>
          {item.icon}
          <Typography
            component={Link}
            color="default"
            variant="body1"
            to={item.link}
            style={{
              textDecoration: "none",
              color: "#8C8C8C",
            }}
          >
            {item.title}
          </Typography>
        </MenuItem>
      ) : (
        <MenuItem key={item.itemId} onClick={this.handleClose}>
          {item.icon}
          <Typography
            color="default"
            variant="body1"
            onClick={logout}
            style={{
              textDecoration: "none",
              color: "#8C8C8C",
            }}
          >
            {item.title}
          </Typography>
        </MenuItem>
      );
    });

    return (
      <Fragment>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleOpen}
          startIcon={<MoreHorizIcon />}
          className={classes.menuLink + " " + classes.moreStyle}
        >
          More
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {moreMenuMarkup}
        </Menu>
      </Fragment>
    );
  }
}

MoreButton.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  moreMenuItems: PropTypes.array.isRequired,
};

export default MoreButton;
