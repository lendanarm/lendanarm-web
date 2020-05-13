import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { uploadImage } from "../../../redux/actions/userActions";
import ProfileTabber from "./ProfileTabber";
import ProfileSkeleton from "../../../shared/components/skeletons/ProfileSkeleton";
import PostSkeleton from "../../../shared/components/PostSkeleton";

const styles = (theme) => ({
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
  root: {
    padding: theme.spacing(2),
    margin: "auto",
    flexGrow: 1,
    // maxWidth: 500,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "60%",
        left: "60%",
      },
    },
    "& .profile-image": {
      width: 100,
      height: 100,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "&span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: theme.palette.primary.main,
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  editImageIcon: {
    marginTop: "-20px",
    marginLeft: "-10px",
  },
  heroPaper: {
    padding: "10px",
    // paddingLeft: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#242424",
    borderRadius: 5,
  },
  heroIcons: {
    height: 50,
    width: 50,
  },
});

class Profile extends PureComponent {
  componentDidMount() {
    const { selectProfile } = this.props;
    selectProfile();
  }
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  render() {
    const {
      transactions,
      classes,
      user: {
        credentials: {
          createdAt,
          handle,
          email,
          userId,
          imageUrl,
          bio,
          website,
          location,
        },
        loading,
        authenticated,
      },
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Fragment>
          <ProfileCard
            user={this.props.user}
            classes={classes}
            handleImageChange={this.handleImageChange}
            handleEditPicture={this.handleEditPicture}
          />
          <ProfileTabber handle={handle} />
        </Fragment>
      ) : (
        <Paper className={classes.paper}>
          <Typography variant="body2" align="center">
            You are not logged in
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/signup"
              >
                Signup
              </Button>
            </div>
          </Typography>
        </Paper>
      )
    ) : (
      <Fragment>
        <ProfileSkeleton />
        <PostSkeleton />
      </Fragment>
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionsToProps = {
  uploadImage,
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectProfile: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles, { withTheme: true })(Profile));
