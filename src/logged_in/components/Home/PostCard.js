import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import timeAgo from "../../../shared/functions/timeAgo";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import MyTooltipButton from "../../../shared/components/MyTooltipButton";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";
import PostMenu from "./PostMenu";

//Redux Stuff
import { connect } from "react-redux";

const styles = (theme) => ({
  root: {
    marginBottom: 5,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  linkHeader: {
    textDecoration: "none",
    color: "#000",
    fontWeight: "500",
  },
});

class PostCard extends Component {
  state = {
    expanded: true,
  };

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      post: {
        postId,
        commentCount,
        createdAt,
        userHandle,
        userImage,
        likeCount,
        body,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;
    const { expanded } = this.state;

    const truncateLogic = body.trim().split(" ").length > 50;
    const bodyText = truncateLogic
      ? body.trim().split(" ").slice(0, 51).join(" ") + " ..."
      : body;

    const handleContentClick = () => {
      this.setState({ expanded: !expanded });
      if (truncateLogic && expanded) {
        document.getElementById(`bodyText${postId}`).innerHTML = body;
        document.getElementById(`moreButton${postId}`).style.visibility =
          "hidden";
        this.setState({ expanded: !expanded });
      } else if (truncateLogic && !expanded) {
        document.getElementById(`bodyText${postId}`).innerHTML = bodyText;
        document.getElementById(`moreButton${postId}`).style.visibility =
          "visible";
        this.setState({ expanded: !expanded });
      }
    };

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              src={userImage}
              aria-label="recipe"
              className={classes.avatar}
            />
          }
          action={<PostMenu user={this.props.user} post={this.props.post} />}
          title={
            <Typography
              variant="subtitle2"
              color="textSecondary"
              component={Link}
              className={classes.linkHeader}
              to={`/c/users/${userHandle}`}
            >
              {userHandle}
            </Typography>
          }
          subheader={dayjs(createdAt).fromNow()}
        />
        {/* {post.img && (
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
      )} */}
        <CardContent onClick={handleContentClick}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ whiteSpace: "pre-line" }}
            id={`bodyText${postId}`}
          >
            {bodyText}
          </Typography>
          <span onClick={handleContentClick} id={`moreButton${postId}`}>
            {truncateLogic && " More"}
          </span>
        </CardContent>
        <CardActions disableSpacing style={{ position: "relative" }}>
          <LikeButton postId={postId} />
          <span>{likeCount} likes</span>
          <MyTooltipButton tip="comments">
            <ChatIcon />
          </MyTooltipButton>
          <span>{commentCount} comments</span>
          <PostDialog
            postId={postId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardActions>
      </Card>
    );
  }
}

PostCard.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(PostCard)
);
