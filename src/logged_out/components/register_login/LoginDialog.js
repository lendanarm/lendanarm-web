import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from '@material-ui/core';
import FormDialog from '../../../shared/components/FormDialog';
import HighlightedInformation from '../../../shared/components/HighlightedInformation';
import ButtonCircularProgress from '../../../shared/components/ButtonCircularProgress';
//Redux Stuff
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/userActions';

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:enabled:hover': {
      color: theme.palette.primary.dark,
    },
    '&:enabled:focus': {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: 'auto',
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
  },
});

class LoginDialog extends PureComponent {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  login = () => {
    const { history } = this.props;
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, history);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      classes,
      onClose,
      openChangePasswordDialog,
      status,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Fragment>
        <FormDialog
          open
          onClose={onClose}
          loading={loading}
          onFormSubmit={(e) => {
            e.preventDefault();
            this.login();
          }}
          hideBackdrop
          headline="Login"
          content={
            <Fragment>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.state.email}
                inputRef={(node) => {
                  this.loginEmail = node;
                }}
                autoFocus
                autoComplete="off"
                type="email"
                onChange={this.handleChange}
                helperText={this.state.errors.email}
                error={errors.email ? true : false}
                FormHelperTextProps={{ error: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                value={this.state.password}
                type="password"
                inputRef={(node) => {
                  this.loginPassword = node;
                }}
                autoComplete="off"
                onChange={this.handleChange}
                helperText={this.state.errors.password}
                error={errors.password ? true : false}
                FormHelperTextProps={{ error: true }}
              />
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Checkbox
                    inputRef={(node) => {
                      this.loginRememberMe = node;
                    }}
                    color="primary"
                  />
                }
                label={<Typography variant="body1">Remember me</Typography>}
              />
              {status === 'verificationEmailSend' ? (
                <HighlightedInformation>
                  We have sent instructions on how to reset your password to
                  your email address
                </HighlightedInformation>
              ) : (
                <HighlightedInformation>
                  {/* Email is: <b>test@web.com</b>
                  <br />
                  Password is: <b>test</b> */}
                  Temporarily disabled. Undergoing maintenance.
                </HighlightedInformation>
              )}

              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
            </Fragment>
          }
          actions={
            <Fragment>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                disabled={loading}
                size="large"
              >
                Login
                {loading && <ButtonCircularProgress />}
              </Button>
              <Typography
                align="center"
                className={classNames(
                  classes.forgotPassword,
                  loading ? classes.disabledText : null
                )}
                color="primary"
                onClick={loading ? null : openChangePasswordDialog}
                tabIndex={0}
                role="button"
                onKeyDown={(event) => {
                  // For screenreaders listen to space and enter events
                  if (
                    (!loading && event.keyCode === 13) ||
                    event.keyCode === 32
                  ) {
                    openChangePasswordDialog();
                  }
                }}
              >
                Forgot Password?
              </Typography>
            </Fragment>
          }
        />
      </Fragment>
    );
  }
}

LoginDialog.propTypes = {
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
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(withStyles(styles)(LoginDialog)));
