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

class Drives extends PureComponent {
  componentDidMount() {
    const { selectDrives } = this.props;
    selectDrives();
  }

  render() {
    const { transactions, classes } = this.props;
    return (
      <Paper>
        <List disablePadding>
          {/* <SubscriptionInfo />
          <Divider className={classes.divider} />
          <SubscriptionTable transactions={transactions} /> */}
          <h1>Blood Drives and Events near You</h1>
        </List>
      </Paper>
    );
  }
}

Drives.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectDrives: PropTypes.func.isRequired,
};

export default withStyles(styles)(Drives);
