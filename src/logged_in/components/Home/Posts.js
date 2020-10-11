import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import CreatePost from "./CreatePost";
import AddPost from "./AddPost";
import PostCard from "./PostCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostSkeleton from "../../../shared/components/PostSkeleton";
//Redux Stuffs
import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/dataActions";

class Posts extends PureComponent {
  state = {
    addPostPaperOpen: false,
    open: false,
  };

  componentDidMount() {
    const { selectPosts } = this.props;
    selectPosts();
    this.props.getPosts();
  }

  /////
  openAddPostModal = () => {
    this.setState({ addPostPaperOpen: true });
  };

  closeAddPostModal = () => {
    this.setState({ addPostPaperOpen: false });
  };
  //////
  handlePostDialog = () => {
    this.setState({ open: true });
  };

  render() {
    let storedLocalPosts = localStorage.getItem("storedLocalPosts");
    ////
    const { addPostPaperOpen, addPostModalOpen } = this.state;
    const {
      EmojiTextArea,
      ImageCropper,
      Dropzone,
      DateTimePicker,
      pushMessageToSnackbar,
      data: { posts, loading },
    } = this.props;

    let recentPostsMarkup = !loading ? (
      posts.map((post) => <PostCard key={post.postId} post={post} />)
    ) : storedLocalPosts ? (
      JSON.parse(storedLocalPosts).map((post) => (
        <PostCard key={post.postId} post={post} />
      ))
    ) : (
      <PostSkeleton />
    );

    !loading && localStorage.setItem("storedLocalPosts", JSON.stringify(posts));

    return (
      <Fragment>
        {/* {addPostPaperOpen ? (
          <AddPost
            onClose={this.closeAddPostModal}
            open={addPostModalOpen}
            EmojiTextArea={EmojiTextArea}
            ImageCropper={ImageCropper}
            Dropzone={Dropzone}
            DateTimePicker={DateTimePicker}
            pushMessageToSnackbar={pushMessageToSnackbar}
          />
        ) : ( */}
        {/* <PostContent
          openAddPostModal={this.openAddPostModal}
          openAddPostModal={this.handlePostDialog}
          posts={posts}
          pushMessageToSnackbar={pushMessageToSnackbar}
        /> */}
        {/* )} */}
        <CreatePost />
        <div>{recentPostsMarkup}</div>
      </Fragment>
    );
  }
}

Posts.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapActionsToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapActionsToProps)(Posts);
