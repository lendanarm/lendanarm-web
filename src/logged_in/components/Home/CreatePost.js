import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Button,
  Paper,
  Box,
  withStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import MyTooltipButton from "../../../shared/components/MyTooltipButton";
//Redux Stuffs
import { connect } from "react-redux";
import { createPost, clearErrors } from "../../../redux/actions/dataActions";

const styles = (theme) => ({
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
  paper: {
    marginBottom: "20px",
  },
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10,
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    width: "12",
    // top: "%",
  },
});

class PostContent extends PureComponent {
  state = {
    open: false,
    body: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "", open: false, errors: {} });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createPost({ body: this.state.body });
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    return (
      <>
        <Paper className={classes.paper}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">What's on your mind?</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleOpen}
            >
              <Box mr={1} display="flex" alignItems="center">
                <AddCircleOutlineIcon fontSize="small" />
              </Box>
              Post
            </Button>
          </Toolbar>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            fullWidth
            maxWidth="sm"
          >
            <MyTooltipButton
              tip="close"
              onClick={this.handleClose}
              tipClassName={classes.closeButton}
            >
              <CloseIcon />
            </MyTooltipButton>
            <DialogTitle>Create a new post</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  name="body"
                  type="text"
                  label="Your post"
                  multiline
                  rows="3"
                  placeholder="Share something with your connects"
                  error={errors.body ? true : false}
                  helperText={errors.body}
                  className={classes.textField}
                  onChange={this.handleChange}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  disabled={loading}
                >
                  Submit
                  {loading && (
                    <CircularProgress
                      size={30}
                      className={classes.progressSpinner}
                    />
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </Paper>
      </>
    );
  }
}

PostContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  pushMessageToSnackbar: PropTypes.func,
  createPost: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});
const mapActionsToProps = {
  createPost,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles, { withTheme: true })(PostContent));
