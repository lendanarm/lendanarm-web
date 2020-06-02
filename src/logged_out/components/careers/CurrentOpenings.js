import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Tab from "@material-ui/core/Tab";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { openings } from "./openings";
import JobDialog from "./JobDialog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  headerText2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2rem",
    lineHeight: "2rem",
    color: "#1A1A1A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      lineHeight: "1.2rem",
    },
  },
  positionHover: {
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
}));

function SimpleTabs({ width }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openJob, setOpenJob] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickJob = () => {
    setOpenJob(true);
  };

  return (
    <div className={classes.root}>
      <Box mb={2}>
        <Typography className={classes.headerText2} variant="h5">
          Current Openings
        </Typography>
      </Box>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="None-remote" {...a11yProps(0)} />
          <Tab label="Remote" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {openings.map((opening, index) =>
          opening ? (
            !opening.remote ? (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4} direction="column">
                  <Typography
                    variant="body1"
                    className={classes.positionHover}
                    onClick={handleClickJob}
                  >
                    {opening.position}
                  </Typography>
                  <Typography variant="body2">{opening.type}</Typography>
                </Grid>
                <Hidden xsDown>
                  <Grid item sm={4}>
                    <Typography variant="body2">Non-remote</Typography>
                  </Grid>
                  <Grid item sm={4}>
                    <Typography variant="body2">{opening.location}</Typography>
                  </Grid>
                </Hidden>
                {/* <JobDialog
                  job={opening}
                  openJob={openJob}
                  setOpenJob={setOpenJob}
                /> */}
              </Grid>
            ) : (
              <Typography variant="body1">
                No non-remote positions at this time.
              </Typography>
            )
          ) : (
            <Typography variant="body1">
              No job opening at this time.
            </Typography>
          )
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {openings.map((opening, index) =>
          opening ? (
            opening.remote ? (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4} direction="column">
                  <Typography variant="body1" className={classes.positionHover}>
                    {opening.position}
                  </Typography>
                  <Typography variant="body2">{opening.type}</Typography>
                </Grid>
                <Hidden xsDown>
                  <Grid item sm={4}>
                    <Typography variant="body2">Non-remote</Typography>
                  </Grid>
                  <Grid item sm={4}>
                    <Typography variant="body2">{opening.location}</Typography>
                  </Grid>
                </Hidden>
                <JobDialog />
              </Grid>
            ) : (
              <Typography variant="body1">
                No remote positions at this time.
              </Typography>
            )
          ) : (
            <Typography variant="body1">
              No job opening at this time.
            </Typography>
          )
        )}
      </TabPanel>
    </div>
  );
}

export default withWidth()(SimpleTabs);
