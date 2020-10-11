import "date-fns";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
//MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
//Icons
import EditIcon from "@material-ui/icons/Edit";
//Redux Stuff
import { connect } from "react-redux";
import { editUserDetails } from "../../../redux/actions/userActions";
import MyTooltipButton from "../../../shared/components/MyTooltipButton";

const styles = (theme) => ({
  button: {
    // justifySelf: "right",
  },
});

class EditProfile extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
    bloodGroup: "",
    bloodGenotype: "",
    healthServiceProvider: "",
    rhesusFactor: "",
    open: false,
    dateOfBirth: new Date("2014-08-18T21:11:54"),
  };
  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : "",
      bloodGroup: credentials.bloodGroup ? credentials.bloodGroup : "",
      bloodGenotype: credentials.bloodGenotype ? credentials.bloodGenotype : "",
      healthServiceProvider: credentials.healthServiceProvider
        ? credentials.healthServiceProvider
        : "",
      rhesusFactor: credentials.rhesusFactor ? credentials.rhesusFactor : "",
      dateOfBirth: credentials.dateOfBirth ? credentials.dateOfBirth : "",
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
      bloodGroup: this.state.bloodGroup,
      bloodGenotype: this.state.bloodGenotype,
      rhesusFactor: this.state.rhesusFactor,
      healthServiceProvider: this.state.healthServiceProvider,
      dateOfBirth: this.state.dateOfBirth,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };
  handleDateChange = (date) => {
    this.setState({ dateOfBirth: date });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleOpen}
          startIcon={<EditIcon />}
        >
          Edit Profile
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your profile details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                type="text"
                label="Bio"
                multiline
                rows="3"
                placeholder="A short bio about yourself"
                className={classes.textField}
                value={this.state.bio}
                onChange={this.onChange}
                fullWidth
              />
              <TextField
                name="website"
                type="text"
                label="Website"
                placeholder="Your personal website"
                className={classes.textField}
                value={this.state.website}
                onChange={this.onChange}
                fullWidth
              />
              <TextField
                name="location"
                type="text"
                label="Location"
                placeholder="Where you live"
                className={classes.textField}
                value={this.state.location}
                onChange={this.onChange}
                fullWidth
              />
              <div>
                <Typography
                  variant="body1"
                  color="primary"
                  style={{ marginTop: 40 }}
                >
                  Biodata (Confidential)
                </Typography>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date of Birth"
                    value={this.state.dateOfBirth}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "set date of birth",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <Grid container justify="space-between">
                  <TextField
                    name="bloodGroup"
                    type="text"
                    label="Blood Group"
                    placeholder="Indicate A, B, AB or O"
                    className={classes.textField}
                    value={this.state.bloodGroup}
                    onChange={this.onChange}
                  />
                  <TextField
                    name="bloodGenotype"
                    type="text"
                    label="Blood Genotype"
                    placeholder="Indicate AA, AC, AS, SC or SS"
                    className={classes.textField}
                    value={this.state.bloodGenotype}
                    onChange={this.onChange}
                  />
                  <TextField
                    name="rhesusFactor"
                    type="text"
                    label="RH Factor"
                    placeholder="Indicate + or -"
                    className={classes.textField}
                    value={this.state.rhesusFactor}
                    onChange={this.onChange}
                  />

                  <TextField
                    name="healthServiceProvider"
                    type="text"
                    label="Health Service Provider"
                    placeholder="Input Hospital name/address"
                    className={classes.textField}
                    value={this.state.healthServiceProvider}
                    onChange={this.onChange}
                  />
                </Grid>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditProfile.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});
const mapActionsToProps = {
  editUserDetails,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles, { withTheme: true })(EditProfile));
