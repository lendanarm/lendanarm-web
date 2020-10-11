import React, { Component } from "react";
import { withStyles, isWidthUp, withWidth } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import Search from "./Search";

const styles = (theme) => ({
  sideBar: {
    height: "100%vh",
    whiteSpace: "nowrap",
  },
});

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log("hi");
  }

  render() {
    const { classes, width } = this.props;
    return (
      <div className={classes.sideBar}>
        <Search
          value={this.state.value}
          onChange={(newValue) => this.setState({ value: newValue })}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

SideBar.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(SideBar));
