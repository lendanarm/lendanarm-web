import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import ReportsTabber from "./ReportsTabber";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

const styles = {
  sectionWrapper: {
    position: "relative",
    paddingTop: 70,
  },
  img: {
    position: "absolute",
    bottom: "-80%",
    left: "40%",
    width: 100,
    height: 100,
    objectFit: "cover",
    maxWidth: "100%",
    borderRadius: "50%",
    zIndex: 1,
  },
};

class MedicalReports extends PureComponent {
  componentDidMount() {
    const { selectMedicalReports } = this.props;
    selectMedicalReports();
  }

  render() {
    const {
      transactions,
      classes,
      user: {
        authenticated,
        credentials: { imageUrl },
      },
    } = this.props;
    return (
      <Paper>
        <div className={classes.sectionWrapper}>
          <img src={imageUrl} alt="profile" className={classes.img} />
        </div>
        <ReportsTabber user={this.props.user} />
      </Paper>
    );
  }
}

MedicalReports.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectMedicalReports: PropTypes.func.isRequired,
  credentials: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(MedicalReports));
