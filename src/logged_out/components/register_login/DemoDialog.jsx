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
import { loginUser } from "../../../redux/actions/userActions";

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

const DemoDialog = (props) => {
  const { classes, onClose, openChangePasswordDialog, status } = props;

  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        //   loading={loading}
        onFormSubmit={(e) => {
          e.preventDefault();
        }}
        hideBackdrop
        headline="Book a Demo"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              // value={this.state.email}
              autoFocus
              autoComplete="off"
              type="text"
              // onChange={this.handleChange}
              // helperText={this.state.errors.email}
              // error={errors.email ? true : false}
              // FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="hospitalName"
              name="hospitalName"
              label="Hospital Name"
              // value={this.state.password}
              type="hospitalName"
              autoComplete="off"
              // onChange={this.handleChange}
              // helperText={this.state.errors.password}
              // error={errors.password ? true : false}
              // FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="numberOfBeds"
              name="numberOfBeds"
              label="Number of Beds"
              // value={this.state.password}
              type="password"
              autoComplete="off"
              // onChange={this.handleChange}
              // helperText={this.state.errors.password}
              // error={errors.password ? true : false}
              // FormHelperTextProps={{ error: true }}
            />
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              // disabled={loading}
              size="large"
            >
              Book
              {/* {loading && <ButtonCircularProgress />} */}
            </Button>
          </Fragment>
        }
      />
    </Fragment>
  );
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
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(withStyles(styles)(DemoDialog)));
