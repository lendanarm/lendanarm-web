import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
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
import axios from "axios";
import { withRouter } from "react-router-dom";
//Redux Stuff
import { connect } from "react-redux";
import { signupUser } from "../../../redux/actions/userActions";

const styles = (theme) => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
});

class RegisterDialog extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      fullName: "",
      termsOfServiceError: false,
      errors: {},
      accountCreated: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  register = () => {
    const { history } = this.props;
    if (!this.registerTermsCheckbox.checked) {
      this.setState({ termsOfServiceError: true });
      return;
    }
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
      fullName: this.state.fullName,
    };
    this.props.signupUser(newUserData, history);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      theme,
      onClose,
      openTermsDialog,
      classes,
      UI: { loading },
    } = this.props;
    const {
      termsOfServiceError,
      email,
      password,
      confirmPassword,
      handle,
      fullName,
      accountCreated,
      errors,
    } = this.state;
    return (
      <FormDialog
        loading={loading}
        onClose={onClose}
        open
        headline="Register"
        onFormSubmit={(e) => {
          e.preventDefault();
        }}
        hideBackdrop
        hasCloseIcon
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={errors.email ? true : false}
              name="email"
              value={email}
              label="Email Address"
              inputRef={(node) => {
                this.registerEmail = node;
              }}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={this.handleChange}
              helperText={errors.email}
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={errors.password ? true : false}
              label="Password"
              name="password"
              value={password}
              type="password"
              inputRef={(node) => {
                this.registerPassword = node;
              }}
              autoComplete="off"
              onChange={this.handleChange}
              helperText={errors.password}
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={errors.confirmPassword ? true : false}
              label="Repeat Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              inputRef={(node) => {
                this.registerPasswordRepeat = node;
              }}
              autoComplete="off"
              onChange={this.handleChange}
              helperText={errors.confirmPassword}
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={errors.handle ? true : false}
              label="LAA Handle"
              name="handle"
              type="text"
              value={handle}
              inputRef={(node) => {
                this.handle = node;
              }}
              autoComplete="off"
              onChange={this.handleChange}
              helperText={errors.handle}
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={errors.fullName ? true : false}
              label="Your Full Name"
              name="fullName"
              type="text"
              value={fullName}
              inputRef={(node) => {
                this.fullName = node;
              }}
              autoComplete="off"
              onChange={this.handleChange}
              helperText={errors.fullName}
              FormHelperTextProps={{ error: true }}
            />
            <FormControlLabel
              style={{ marginRight: 0 }}
              control={
                <Checkbox
                  color="primary"
                  inputRef={(node) => {
                    this.registerTermsCheckbox = node;
                  }}
                  onChange={() => {
                    this.setState({ termsOfServiceError: false });
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  I agree to the
                  <span
                    className={classes.link}
                    onClick={loading ? null : openTermsDialog}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(event) => {
                      // For screenreaders listen to space and enter events
                      if (
                        (!loading && event.keyCode === 13) ||
                        event.keyCode === 32
                      ) {
                        openTermsDialog();
                      }
                    }}
                  >
                    {" "}
                    terms of service
                  </span>
                </Typography>
              }
            />
            {termsOfServiceError && (
              <FormHelperText
                error
                style={{
                  display: "block",
                  marginTop: theme.spacing(-1),
                }}
              >
                In order to create an account, you have to accept our terms of
                service.
              </FormHelperText>
            )}
            {/* {accountCreated ? (
              <HighlightedInformation>
                We have created your account. Please click on the link in the
                email we have sent to you before logging in.
              </HighlightedInformation>
            ) : ( */}
            <HighlightedInformation>
              Temporarily disabled. Undergoing maintenance.
            </HighlightedInformation>
            {/* )} */}
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
          </Fragment>
        }
        actions={
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="secondary"
            disabled={loading}
          >
            Register
            {loading && <ButtonCircularProgress />}
          </Button>
        }
      />
    );
  }
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
  withRouter(withStyles(styles, { withTheme: true })(RegisterDialog))
);
