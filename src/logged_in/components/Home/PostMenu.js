import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//MUI Stuff
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
//Icons
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
//Redux Stuff
import { connect } from "react-redux";
import { deletePost } from "../../../redux/actions/dataActions";

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
  deletePost = () => {
    this.props.deletePost(this.props.post.postId);
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      logout,
      user: {
        authenticated,
        credentials: { handle },
      },
      post: { userHandle, postId },
    } = this.props;
    const anchorEl = this.state.anchorEl;

    const deleteButton =
      authenticated && userHandle === handle
        ? {
            itemId: "1",
            title: "Delete post",
            onClick: { deletePost },
            icon: <DeleteOutline style={{ marginRight: 10, fontSize: 15 }} />,
          }
        : null;
    const moreMenuItems = [
      deleteButton,
      {
        itemId: "2",
        title: `Connect @${handle}`,
        icon: <AllInclusiveIcon style={{ marginRight: 10, fontSize: 15 }} />,
      },
    ];

    let moreMenuMarkup = moreMenuItems.map((item) => {
      return !item ? null : (
        <MenuItem key={item.itemId} onClick={this.handleClose}>
          {item.icon}
          <Typography
            color="default"
            variant="p"
            onClick={this.deletePost}
            style={{
              textDecoration: "none",
              color: "#8C8C8C",
              fontSize: "12px",
            }}
          >
            {item.title}
          </Typography>
        </MenuItem>
      );
    });

    return (
      <Fragment>
        <IconButton
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          aria-label="post options"
          onClick={this.handleOpen}
        >
          <MoreVertIcon style={{ fontSize: "15" }} />
        </IconButton>
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

const mapActionsToProps = {
  deletePost,
};

export default connect(null, mapActionsToProps)(MoreButton);
