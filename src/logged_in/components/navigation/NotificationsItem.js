import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";

class MessageListItem extends PureComponent {
  links = [];
  render() {
    dayjs.extend(relativeTime);
    const { notification, divider } = this.props;
    const verb = notification.type === "like" ? "liked" : "commented on";
    const time = dayjs(notification.createdAt).fromNow();
    const iconColor = notification.read ? "secondary" : "primary";
    const icon =
      notification.type === "like" ? (
        <FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
      ) : (
        <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
      );
    return (
      <ListItem divider={divider}>
        <ListItemAvatar>{icon}</ListItemAvatar>

        <ListItemText
          primary=<Typography
            component={Link}
            variant="body1"
            color="secondary"
            to={`/c/${notification.recipient}/post/${notification.postId}`}
            style={{ textDecoration: "none" }}
          >
            {notification.sender} {verb} your post
          </Typography>
          secondary={time}
        />
      </ListItem>
    );
  }
}

MessageListItem.propTypes = {
  notification: PropTypes.object,
  divider: PropTypes.bool,
};

export default MessageListItem;
