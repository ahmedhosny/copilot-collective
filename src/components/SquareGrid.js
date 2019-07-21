import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MediaCard from "./MediaCard";
import WelcomeCard from "./WelcomeCard";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Data from "../Data.js";

const styles = theme => ({
  body: {
    backgroundColor: "red",
    margin: "0 auto"
  }
});
function SquareGrid(props) {
  const { classes } = props;
  return (
    <Grid container spacing={16} className={classes.body}>
      <Grid item>
        <WelcomeCard />
      </Grid>
      {Data.map((friend, index) => {
        return (
          <Grid key={index} item>
            <MediaCard friend={friend} />
          </Grid>
        );
      })}
    </Grid>
  );
}

SquareGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SquareGrid);

// direction="row"
// alignItems="stretch"
// justify="flex-start"
