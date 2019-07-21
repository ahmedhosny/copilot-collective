import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SquareGrid from "./components/SquareGrid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "blue"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  center: {
    justifyContent: "center"
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>The Copilot Collective</Paper>
        </Grid>
        <Grid item xs={10} classname={classes.center}>
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
