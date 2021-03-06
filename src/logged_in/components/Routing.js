import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import AccountSettings from "./Account/AccountSettings";
import Posts from "./Home/Posts";
import Subscription from "./subscription/Subscription";
import Beta from "./Beta/Beta";
import Discussions from "./Discussions/Discussions";
import Donations from "./Donations/Donations";
import Drives from "./Drives/Drives";
import MedicalReports from "./Medical_Reports/MedicalReports";
import Profile from "./Profile/Profile";
import User from "./Profile/User";
import PropsRoute from "../../shared/components/PropsRoute";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    posts,
    transactions,
    handleNumberChange,
    handleSwitchToggle,
    handleSelectChange,
    toggleAccountActivation,
    CardChart,
    statistics,
    targets,
    isAccountActivated,
    selectPosts,
    selectBeta,
    selectDiscussions,
    selectDonations,
    selectDrives,
    selectMedicalReports,
    selectProfile,
    selectSettings,
    selectSubscription,
    openAddBalanceDialog,
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path="/c/posts"
          component={Posts}
          EmojiTextArea={EmojiTextArea}
          ImageCropper={ImageCropper}
          Dropzone={Dropzone}
          DateTimePicker={DateTimePicker}
          pushMessageToSnackbar={pushMessageToSnackbar}
          posts={posts}
          selectPosts={selectPosts}
        />
        <PropsRoute
          path="/c/discussions"
          component={Discussions}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDiscussions={selectDiscussions}
          openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/c/blood_donations"
          component={Donations}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDonations={selectDonations}
          openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/c/blood_drives"
          component={Drives}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDrives={selectDrives}
          openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/c/medical_reports"
          component={MedicalReports}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectMedicalReports={selectMedicalReports}
          openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/c/profile"
          component={Profile}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectProfile={selectProfile}
          openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/c/account_settings"
          component={AccountSettings}
          handleNumberChange={handleNumberChange}
          handleSwitchToggle={handleSwitchToggle}
          handleSelectChange={handleSelectChange}
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          isAccountActivated={isAccountActivated}
          selectSettings={selectSettings}
        />

        <PropsRoute
          path="/c/beta"
          component={Beta}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectBeta={selectBeta}
          openAddBalanceDialog={openAddBalanceDialog}
        />

        <PropsRoute path="/c/users/:handle" component={User} />
        <PropsRoute path="/c/:handle/post/:postId" component={User} />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  pushMessageToSnackbar: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNumberChange: PropTypes.func,
  handleSwitchToggle: PropTypes.func,
  handleSelectChange: PropTypes.func,
  toggleAccountActivation: PropTypes.func,
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectPosts: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
