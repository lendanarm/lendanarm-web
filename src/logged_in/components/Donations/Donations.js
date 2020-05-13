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

class Donations extends PureComponent {
  componentDidMount() {
    const { selectDonations } = this.props;
    selectDonations();
  }

  render() {
    const { transactions, classes } = this.props;
    return (
      <Paper>
        <List disablePadding>
          {/* <SubscriptionInfo />
          <Divider className={classes.divider} />
          <SubscriptionTable transactions={transactions} /> */}
          <h1>Track Your Donation</h1>
        </List>
      </Paper>
    );
  }
}

Donations.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectDonations: PropTypes.func.isRequired,
};

export default withStyles(styles)(Donations);
