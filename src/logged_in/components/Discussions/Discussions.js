import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import SubscriptionTable from "../subscription/SubscriptionTable";
import SubscriptionInfo from "../subscription/SubscriptionInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
};

class Discussions extends PureComponent {
  componentDidMount() {
    const { selectDiscussions } = this.props;
    selectDiscussions();
  }

  render() {
    const { transactions, classes } = this.props;
    return (
      <Paper>
        <List disablePadding>
          {/* <SubscriptionInfo />
          <Divider className={classes.divider} />
          <SubscriptionTable transactions={transactions} /> */}
          <h1>Discussion Board</h1>
        </List>
      </Paper>
    );
  }
}

Discussions.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectDiscussions: PropTypes.func.isRequired,
};

export default withStyles(styles)(Discussions);
