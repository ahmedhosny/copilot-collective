import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MediaCard from "./MediaCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Data from "../Data.js";

const styles = theme => ({});

function SquareGrid(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24}>
        {Data.map((friend, index) => {
          return (
            <Grid key={index} item>
              <MediaCard friend={friend} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

SquareGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SquareGrid);
