import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// // import Icon from "@material-ui/core/Icon";
// import airplane from "../airplane.svg";

const styles = {
  card: {
    maxWidth: 345,
    height: 440,
    width: 345,
    backgroundColor: "#1976d2"
  },
  text: {
    fontSize: 30,
    color: "white"
  }
};

function WelcomeCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.text}>
        For{" "}
        <a
          className={classes.text}
          href="https://www.ahmedhosny.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          me
        </a>
        , the most rewarding part of flying is sharing it with friends. Here are
        their stories.
      </CardContent>
    </Card>
  );
}

WelcomeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WelcomeCard);
