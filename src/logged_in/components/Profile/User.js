import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getUserData } from "../../../redux/actions/dataActions";
import PostCard from "../Home/PostCard";
import StaticProfile from "./StaticProfile";
import PostSkeleton from "../../../shared/components/PostSkeleton";
import ProfileSkeleton from "../../../shared/components/skeletons/ProfileSkeleton";

export class User extends Component {
  state = {
    profile: null,
    postIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const postId = this.props.match.params.postId;
    // console.log(this.props.match.params.handle);
    console.log("hi" + this.props.match.params.postId);

    if (postId) this.setState({ postIdParam: postId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.postIdParam);
    console.log("hello");
    const { posts, loading } = this.props.data;
    const { postIdParam } = this.state;

    const postsMarkup = loading ? (
      <PostSkeleton />
    ) : posts === null ? (
      <p>No posts from this user</p>
    ) : !postIdParam ? (
      posts.map((post) => <PostCard key={post.postId} post={post} />)
    ) : (
      posts.map((post) => {
        if (post.postId !== postIdParam)
          return <PostCard key={post.postId} post={post} />;
        else return <PostCard key={post.postId} post={post} openDialog />;
      })
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {postsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

User.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapActionsToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapActionsToProps)(User);
