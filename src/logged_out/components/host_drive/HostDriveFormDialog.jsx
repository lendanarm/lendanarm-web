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

class LoginDialog extends PureComponent {
  render() {
    const { classes, open, setOpen } = this.props;
    const onClose = () => {
      setOpen(false);
    };
    return (
      <Fragment>
        <FormDialog
          open={open}
          onClose={onClose}
          onFormSubmit={(e) => {
            e.preventDefault();
          }}
          hideBackdrop
          headline="Host a Blood Drive"
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
                inputRef={(node) => {
                  this.name = node;
                }}
                autoFocus
                autoComplete="off"
                type="text"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                inputRef={(node) => {
                  this.email = node;
                }}
                autoFocus
                autoComplete="off"
                type="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                name="address"
                label="Address"
                type="text"
                inputRef={(node) => {
                  this.address = node;
                }}
                autoComplete="off"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                name="phone"
                label="Phone"
                type="text"
                inputRef={(node) => {
                  this.phone = node;
                }}
                autoComplete="off"
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
                size="large"
              >
                Host a Blood Drive
              </Button>
            </Fragment>
          }
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(LoginDialog);
