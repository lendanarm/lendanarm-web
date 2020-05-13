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

class Beta extends PureComponent {
  componentDidMount() {
    const { selectBeta } = this.props;
    selectBeta();
    if (this.props.match.params.postId) {
      console.log("finally" + this.props.match.params.postId);
    }
  }

  render() {
    const { transactions, classes } = this.props;
    return (
      <Paper>
        <List disablePadding>
          {/* <SubscriptionInfo />
          <Divider className={classes.divider} />
          <SubscriptionTable transactions={transactions} /> */}

          <h1>Beta Features</h1>
        </List>
      </Paper>
    );
  }
}

Beta.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectBeta: PropTypes.func.isRequired,
};

export default withStyles(styles)(Beta);
