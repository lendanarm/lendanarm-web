import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Popover,
  IconButton,
  AppBar,
  List,
  Divider,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import NotificationsItem from "./NotificationsItem";
//MUI Stuff
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//Icons
import NotificationsIcon from "@material-ui/icons/Notifications";
//Redux
import { connect } from "react-redux";
import { markNotificationsRead } from "../../../redux/actions/userActions";

const styles = (theme) => ({
  tabContainer: {
    overflowY: "auto",
    maxHeight: 350,
  },
  popoverPaper: {
    width: "100%",
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 270,
    },
  },
  divider: {
    marginTop: -2,
  },
  noShadow: {
    boxShadow: "none !important",
  },
});

class Notifications extends PureComponent {
  anchorEl = null;

  state = {
    open: false,
  };

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };
  onMenuOpened = () => {
    let unreadNotificationsIds = this.props.notifications
      .filter((not) => !not.read)
      .map((not) => not.notificationId);
    this.props.markNotificationsRead(unreadNotificationsIds);
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    const id = open ? "scroll-playground" : null;

    const notifications = this.props.notifications;

    let notificationsIcon;

    let unreadNotificationsLength = notifications.filter(
      (not) => not.read === false
    ).length;
    if (notifications && notifications.length > 0) {
      unreadNotificationsLength > 0
        ? (notificationsIcon = (
            <Badge badgeContent={unreadNotificationsLength} color="secondary">
              <NotificationsIcon />
            </Badge>
          ))
        : (notificationsIcon = <NotificationsIcon />);
    } else {
      notificationsIcon = <NotificationsIcon />;
    }

    let notificationsMarkup =
      notifications && notifications.length > 0 ? (
        notifications.map((not, index) => (
          <NotificationsItem
            notification={not}
            key={index}
            divider={index !== notifications.length - 1}
          />
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No unread notification" />
        </ListItem>
      );

    return (
      <Fragment>
        <IconButton
          onClick={this.handleClick}
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          aria-describedby={id}
          color="primary"
        >
          {notificationsIcon}
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          classes={{ paper: classes.popoverPaper }}
          onClose={this.handleClickAway}
          onEntered={this.onMenuOpened}
        >
          {<span className={classes.arrow} ref={this.handleArrowRef} />}
          <div>
            <AppBar
              position="static"
              color="inherit"
              className={classes.noShadow}
            >
              <Box pt={1} pl={2} pb={1} pr={1}>
                <Typography variant="subtitle1">Notifications</Typography>
              </Box>
              <Divider className={classes.divider} />
            </AppBar>
            <List dense className={classes.tabContainer}>
              {notificationsMarkup}
            </List>
          </div>
        </Popover>
      </Fragment>
    );
  }
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  markNotificationsRead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.user.notifications,
});
const mapDispatchToProps = {
  markNotificationsRead,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Notifications));
