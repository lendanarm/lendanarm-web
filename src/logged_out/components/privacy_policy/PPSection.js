//Package Imports
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//Local Component Imports
import Image from "../../../shared/components/Image";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
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
  wrapper: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(4.5),
    marginBottom: theme.spacing(4.5),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1.5),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  headerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      lineHeight: "1.2rem",
    },
  },
});

function PPSection(props) {
  const { classes, width, theme } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box style={{ justifyContent: "center" }} className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box
                  style={{ justifyContent: "space-between" }}
                  className="row"
                >
                  <Grid item xs={12} md={12}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          Our Commitment to Privacy.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Project Lend an Arm respects the privacy of every
                            visitor to our websites and every user of our mobile
                            apps. Your privacy is a priority, and we go to great
                            lengths to protect it. This Privacy Policy describes
                            how we collect and use information about our online
                            visitors. We know you care about your information
                            and we want you to be fully informed about our
                            practices.
                            <br /> This Policy may be changed or updated from
                            time to time. By visiting the Project Lend an Arm at
                            one of our websites or using one of our mobile apps,
                            you accept the practices described in this Policy.
                          </Typography>
                        </Box>
                      </div>
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          The Data We Collect.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Our websites and mobile apps provide convenient ways
                            for you to access our services and learn about
                            important Project Lend an Arm opportunities and
                            events. We collect information about our online
                            visitors both directly from our visitors and
                            indirectly from other companies that provide data to
                            us. We use this information to communicate with our
                            supporters and clients and process their
                            transactions. We do not sell it to other
                            organizations. <br /> When you use our websites or
                            apps to make a financial contribution, register for
                            a class or special event, sign up to volunteer,
                            apply for a job, or make a blood donation
                            appointment, we may ask you for your name, address,
                            phone number(s), and other information relevant to
                            the transaction. We will ask for standard credit
                            card information when you make a financial donation,
                            pay for a class, or make a purchase. We obtain
                            information about our online visitors from other
                            sources as well. For example, we engage vendors that
                            provide contact information and other data. We use
                            this data to help us engage with people who may be
                            interested in participating in Project Lend an Arm
                            activities. <br />
                            We also collect non-personal information about our
                            online visitors using “cookies”, pixels, web
                            beacons, and other technologies that operate
                            automatically when you visit our website. We use
                            this information to give our website visitors a more
                            relevant online experience and to help us make
                            website improvements. The information helps us
                            understand which parts of our websites are the most
                            popular, where our online visitors are going, and
                            how long they spend there. If you do not want us to
                            collect information using cookies, you can disable
                            this function in your browser. If you block cookies
                            from us, however, you may not be able to see
                            personalized content and our website may not
                            function optimally.
                          </Typography>
                        </Box>
                      </div>
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          How We Secure Data.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            We use a variety of security measures to protect
                            your data. We maintain physical, electronic and
                            procedural safeguards to help prevent unauthorized
                            access to and improper use of personally
                            identifiable information. <br />
                            We protect the security of credit card transactions
                            using a number of measures such as encryption,
                            access controls, network firewalls, and physical
                            security. These measures make it extremely difficult
                            for anyone to intercept the credit card information
                            you send to us. When we work with other companies to
                            process credit card transactions, those companies
                            also use encryption and other appropriate security
                            measures.
                            <br /> No website or electronic data can ever be
                            completely secure, but we are always working to
                            maintain up-to-date and appropriate security
                            mechanisms.
                          </Typography>
                        </Box>
                      </div>
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          How We Use Your information.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            If you provide Project Lend an Arm with personal
                            information when you visit our websites or use our
                            mobile apps, we may use the information in our
                            programs and activities. We may enter your
                            information into one of our databases so we can
                            contact you to obtain your input, provide
                            information about our programs and events, request
                            donations, or provide a more personalized online
                            experience.
                            <br /> Project Lend an Arm does not sell, trade, or
                            share our donors’ personally identifiable
                            information with any other entity, except as
                            described below. We do not send mailings to our
                            donors on behalf of other organizations unless the
                            donor has given us specific permission to do so.
                            <br /> On occasion, Project Lend an Arm may share
                            your information with our vendors and other partners
                            that help us with our activities and programs. For
                            example, we share information with vendors that help
                            us fulfill orders, manage data, and process
                            donations and credit card payments. These vendors
                            are bound by strict confidentiality rules and are
                            permitted to use the information only to support
                            Project Lend an Arm operations. We also disclose
                            information as required by law.
                          </Typography>
                        </Box>
                      </div>
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          We Care About Doing It Right.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Project Lend an Arm is committed to accuracy and
                            precision in processing your information. We have
                            procedures to check for errors, and our systems are
                            periodically audited to make sure we process your
                            information securely and accurately.
                          </Typography>
                        </Box>
                      </div>
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          Note To Parents About Our Privacy Policy.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            Project Lend an Arm has a variety of programs for
                            children. We hope that children and parents will
                            visit our websites and use our mobile apps together,
                            so they can jointly learn about the Project Lend an
                            Arm and opportunities for children to participate.
                            Project Lend an Arm does not intentionally collect
                            personal information from people under age 13.
                          </Typography>
                        </Box>
                      </div>
                      <Box mb={1}>
                        <Typography
                          className={classes.headerText}
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                        >
                          Contact Us About Privacy.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography variant="body1" color="textSecondary">
                            If you have questions about this Privacy Policy, you
                            may send us an email at{" "}
                            <a
                              href="mailto:privacy@lendanarm.ng"
                              style={{
                                textDecoration: "none",
                                color: theme.palette.primary.main,
                              }}
                            >
                              privacy@lendanarm.ng
                            </a>{" "}
                            or write to:
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            align="center"
                          >
                            Project Lend an Arm Office,
                            <br /> SW8/556, Ajengbe Street,
                            <br />
                            Off Imalefalafia Road,
                            <br /> Oke Ado, Ibadan,
                            <br /> Oyo state 200252
                            <br /> Nigeria.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

PPSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(PPSection));
