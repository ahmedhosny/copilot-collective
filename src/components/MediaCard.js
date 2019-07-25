import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 259, // 900
    width: 345 // 1200
  },
  fab: {
    marginTop: -28,
    float: "right",
    marginRight: 15
  },
  text: {
    color: "#444"
  }
};

function flightpath(route) {
  var path = [];
  route.forEach((airport, index) => {
    path.push(airport + " ");
    if (index !== route.length - 1) {
      path.push(<span class="mdi mdi-airplane mdi-18px mdi-rotate-90" />);
      path.push(" ");
    }
  });
  return path;
}

function MediaCard(props) {
  const { classes, friend } = props;
  const {
    name,
    route,
    date,
    callsign,
    images,
    movies,
    mapForeflight
    // mapGooglemaps
  } = friend;
  const imageLink =
    "https://github.com/ahmedhosny/get-high/raw/master/public/assets/";
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageLink + name.toLowerCase() + ".jpg"}
          title={name}
        />
        <Fab
          target="_blank"
          href={mapForeflight[0]}
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <span class="mdi mdi-map mdi-24px" />
        </Fab>
        <CardContent>
          <Typography
            className={classes.text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          <Typography className={classes.text} variant="subheading">
            {flightpath(route)}
          </Typography>
          <Typography className={classes.text} variant="body1">
            {date}
            {" --- "}
            {callsign}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {images !== undefined ? (
          <Button target="_blank" href={images} size="small" color="primary">
            <span class="mdi mdi-image-multiple mdi-24px" />
          </Button>
        ) : null}
        {movies !== undefined ? (
          <Button target="_blank" href={movies} size="small" color="primary">
            <span class="mdi mdi-library-video mdi-24px" />
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  friend: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
