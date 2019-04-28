// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SquareGrid from "./components/SquareGrid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
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
        // direction="column"
        // alignItems="center"
        justify="center"
        style={{
          margin: 0,
          width: "100%",
          justifyContent: "center"
        }}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={10} classname={classes.center}>
          <SquareGrid />
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoGrid);
