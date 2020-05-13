import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { getUserData } from "../../../redux/actions/dataActions";
import BioData from "./BioData";
import ReportsStructure from "./ReportsStructure";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 30,
  },
}));

function ReportsTabber(props) {
  const {
    getUserData,
    handle,
    data: { posts, loading },
    user,
  } = props;

  useEffect(() => {
    getUserData(handle);
    console.log(handle);
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const postsMarkup = loading ? (
  //     <PostSkeleton />
  //   ) : posts === null ? (
  //     <p>No posts from this user</p>
  //   ) : (
  //     posts.map((post) => <PostCard key={post.postId} post={post} />)
  //   );

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Your Biodata" {...a11yProps(0)} />
          <Tab label="Medical Reports" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BioData user={user} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ReportsStructure />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsTabber);
