//Package Imports
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//MUI Component Imports
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth from "@material-ui/core/withWidth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//Local Component Imports
import WaveBorder from "../../../shared/components/WaveBorder";
//Local Image Imports
import asake from "./../../data/images/asakevirtual.jpg";
import logistics from "./../../data/images/logistics.jpg";
import training from "./../../data/images/training.jpg";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
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
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4.5),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
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
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  root: {
    maxWidth: 350,
    height: "100%",
  },
  media: {
    height: 140,
  },
});

const solutionsList = [
  {
    title: "Asake",
    about:
      "Our Cognitive Virtual Assistant, Asake, eases your journey to becoming a voluntary blood donor. Asake schedules/reminds you of your blood donation appointments, locate the nearest donation center, assists you with blood grouping and cross matching form and even answers any questions you have on blood donation.",
    image: asake,
    dad: 200,
  },
  {
    title: "Supply Logistics",
    about:
      "Our innovation is a novel integrated blood supply system utilizing two point-of-care technologies, Internet of Things and beyond-line-of-sight delivery drones to ensure delivery of blood in <30 minutes.",
    image: logistics,
    dad: 500,
  },
  {
    title: "Training",
    about:
      "Interested voluntary donors in contiguous locations are recruited for a blood-donation advocacy training. These trained ‘Heroes’ are then given badges as community advocates for voluntary donation, helping recruit new voluntary donors.",
    image: training,
    dad: 800,
  },
];

function PremiumSolutions(props) {
  const { classes, theme } = props;
  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <WaveBorder
        upperColor={theme.palette.background.default}
        lowerColor={theme.palette.primary.main}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
      <div
        className="container-fluid lg-p-top-alt"
        style={{ paddingBottom: 15 }}
      >
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Grid
              container
              justify="center"
              spacing={4}
              className={classes.card}
            >
              {solutionsList.map((solution) => (
                <Grid item sm={4}>
                  <Card
                    className={classes.root}
                    data-aos-delay={solution.dad}
                    data-aos="zoom-in"
                  >
                    <CardMedia
                      className={classes.media}
                      image={solution.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {solution.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {solution.about}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

PremiumSolutions.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(PremiumSolutions)
);
