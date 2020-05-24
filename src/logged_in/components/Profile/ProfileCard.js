import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import MyTooltipButton from "../../../shared/components/MyTooltipButton";
import EditProfile from "./EditProfile";
//MUI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
//Icons
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import donationVector from "../../data/images/donationVector.svg";
import PeopleIcon from "@material-ui/icons/People";

export default function DonationCta({
  classes,
  user: {
    credentials: {
      createdAt,
      handle,
      email,
      userId,
      fullName,
      imageUrl,
      bio,
      website,
      location,
    },
    loading,
    authenticated,
  },
  handleImageChange,
  handleEditPicture,
}) {
  const pointsMap = [
    {
      img: donationVector,
      points: "00",
      title: "Donations",
      link: "/c/blood_donations",
    },
    {
      img: donationVector,
      points: "20",
      title: "Hero Points",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <Grid container spacing={2}>
          <Grid item>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                onChange={handleImageChange}
                hidden="hidden"
              />

              <MyTooltipButton
                tip="Edit profile picture"
                onClick={handleEditPicture}
                btnClassName="button"
                className={classes.editImageIcon}
              >
                <PhotoCameraRoundedIcon color="primary" />
              </MyTooltipButton>
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ color: "#2C2C2C", fontWeight: 500 }}
                >
                  {fullName}
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  color="secondary"
                  to={`/c/users/${handle}`}
                  style={{ textDecoration: "none" }}
                  gutterBottom
                >
                  @{handle}
                </Typography>
              </Grid>
              <Grid item>
                <EditProfile />
              </Grid>
            </Grid>
            <Grid item>
              <Badge badgeContent="600" max={999} color="primary">
                <PeopleIcon />
              </Badge>
              <h5 style={{ marginTop: "-5px" }}>connections</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {bio}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 10, marginBottom: 10 }}>
            {location && (
              <span style={{ marginRight: 20 }}>
                <LocationOn color="primary" style={{ fontSize: 15 }} />{" "}
                <span> {location}</span>
              </span>
            )}
            {website && (
              <span style={{ marginRight: 20 }}>
                <LinkIcon color="primary" style={{ fontSize: 15 }} />{" "}
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#8A0303",
                  }}
                >
                  {" "}
                  {website}
                </a>
              </span>
            )}
            <span style={{ marginRight: 20 }}>
              <CalendarToday color="primary" style={{ fontSize: 15 }} />{" "}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
            </span>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {pointsMap.map((pointer) => (
            <Grid item xs={4} container>
              <Paper
                className={classes.heroPaper}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img src={pointer.img} className={classes.heroIcons} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 24,
                    }}
                  >
                    {pointer.points}
                  </span>
                  <span style={{ color: "#fff" }}>{pointer.title}</span>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
