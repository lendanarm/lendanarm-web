import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
//Redux Stuff
import { connect } from "react-redux";
import { bookDemo } from "../../../redux/actions/emailActions";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
  },
});

class DemoDialog extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      hospitalName: "",
      numberOfBeds: "",
      error: null,
      message: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
     if (nextProps.email.message) {
      this.setState({ message: nextProps.email.message });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  

render() {
  const { classes, onClose, openChangePasswordDialog, status, bookDemo, UI: { loading }, } = this.props;

  const { error } = this.state;

  const bookDemoHandler = () => {
    const data = {
  "from": this.state.email,
  "subject": `DEMO BOOKING BY ${this.state.name} FOR ${this.state.hospitalName} `,
  "text": `Name: ${this.state.name}, <br> Phone Number: ${this.state.phoneNumber}, 
  <br/> Email: ${this.state.email}, <br/> Hospital Name: ${this.state.hospitalName}, <br/> Number of Beds: ${this.state.numberOfBeds}`,
  "name": this.state.name
}
bookDemo(data)

  };
  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
          loading={loading}
        onFormSubmit={(e) => {
          e.preventDefault();
          bookDemoHandler();
        }}
        hideBackdrop
        headline="Book a Demo"
        content={
          <Fragment>
            
          {this.state.message !== null ? (
                <HighlightedInformation>
                  {this.state.message}
                </HighlightedInformation>
              ) : (
                <>
                <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={this.state.name}
              autoFocus
              autoComplete="off"
              type="text"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              autoFocus
              autoComplete="off"
              type="number"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={this.state.email}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="hospitalName"
              name="hospitalName"
              label="Hospital Name"
              value={this.state.hospitalName}
              type="text"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="numberOfBeds"
              name="numberOfBeds"
              label="Number of Beds"
              value={this.state.numberOfBeds}
              type="number"
              autoComplete="off"
              onChange={this.handleChange}
            />
                </>
              )}
              {error && (
                <Typography variant="body2" className={classes.customError}>
                  {error}
                </Typography>
              )}
            </Fragment>
          
        }
        
        actions={
          <Fragment>
          {this.state.message !== null ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={onClose}
              size="large"
            >
              Close
              {loading && <ButtonCircularProgress />}
            </Button>) : <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={loading}
              size="large"
            >
              Book
              {loading && <ButtonCircularProgress />}
            </Button>}
          </Fragment>
        }
      />
    </Fragment>
  )
  };
};

DemoDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.email,
  UI: state.UI,
});
const mapActionsToProps = {
  bookDemo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(withStyles(styles)(DemoDialog)));
