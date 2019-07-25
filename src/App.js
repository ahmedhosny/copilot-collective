import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SquareGrid from "./components/SquareGrid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#eceff1"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  center: {
    marginTop: 50,
    justifyContent: "center",
    marginBottom: 50
  },
  title: {
    textAlign: "left",
    fontSize: 40,
    marginBottom: 20,
    fontFamily: "serif",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#444"
  }
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={24}
        justify="center"
        style={{
          margin: "auto",
          width: "100%",
          justifyContent: "center"
        }}
      >
        <Grid item xs={10} className={classes.center}>
          <div className={classes.title}>The Copilot Collective</div>
          <SquareGrid />
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoGrid);
