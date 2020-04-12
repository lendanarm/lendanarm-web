import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import OurSolution from "./our_solution/ourSolution";
import BecomeDonor from "./become_donor/BecomeDonor";
import HostDrive from "./host_drive/HostDrive";
import BlogPost from "./blog/BlogPost";

function Routing(props) {
  const {
    blogPosts,
    selectBlog,
    selectHome,
    selectBecome,
    selectSolution,
    selectHost,
  } = props;

  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          /* We cannot use the url here as it contains the get params */
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.imageSrc}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      <PropsRoute
        path="/become-donor"
        component={BecomeDonor}
        selectHome={selectBecome}
      />
      <PropsRoute
        path="/host-drive"
        component={HostDrive}
        selectHome={selectHost}
      />
      <PropsRoute
        path="/our-solution"
        component={OurSolution}
        selectHome={selectSolution}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default Routing;
