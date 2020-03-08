import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius * 2
  },
  cardHightlighted: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius * 2
  },
  title: {
    color: theme.palette.primary.main
  }
});

function StepsToDonate(props) {
  const { classes, theme, title, pricing, features, highlighted } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h5"}
          className={highlighted ? "text-white" : classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h4" : "h4"}
          className={highlighted ? "text-white" : null}
        >
          {pricing}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          <Box ml={1}>
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "body1" : "body1"}
            >
              {feature}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}

StepsToDonate.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(StepsToDonate);
