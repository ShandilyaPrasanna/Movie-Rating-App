import React from "react";
import { connect } from "react-redux";
import compose from "compose-function";

//Material ui components
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//Icons
import Grade from "@material-ui/icons/Grade";
import ClapperImage from "../../assets/img/clapperboard-icon.jpg";

const styles = () => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    font: "30px Arial,sans-serif",
    fontWeight: "normal",
    lineHeight: "110%"
  },
  gradeIcon: { marginTop: "-4px", color: "gold" },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px"
  },
  cardMedia: { width: "30%", marginLeft: "auto" }
});

//Component display Movie details in grid based on store state change
export class movieGrid extends React.Component {
  displayRatings = reviews => {
    const { classes } = this.props;
    return (
      <CardActions>
        {reviews.map((rating, index) => {
          const style = { padding: "3px" };
          if (index !== 0) {
            style.marginLeft = "auto";
          }
          return (
            <React.Fragment>
              <Typography
                variant="body2"
                color="primary"
                component="p"
                style={style}
              >
                {rating.rating}
              </Typography>
              <Grade className={classes.gradeIcon} />
              <Typography variant="body2" color="primary" component="p">
                {rating.provider}
              </Typography>
            </React.Fragment>
          );
        })}
      </CardActions>
    );
  };

  displayMovieDetails = (type, value) => (
    <Container style={{ display: "flex" }}>
      <Typography variant="h8" component="h3">
        {`${type}`}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        component="p"
        style={{ padding: "3px" }}
      >
        {`${value}`}
      </Typography>
    </Container>
  );
  render() {
    const { classes, movies } = this.props;
    return (
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {movies.map(movie => (
          <Grid item key={movie.id} xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {`${movie.title} (${movie.year})`}
                </Typography>
                <CardContent style={{ display: "flex" }}>
                  <CardContent className={classes.cardContent}>
                    {this.displayMovieDetails("Genre:", movie.genre)}
                    {this.displayMovieDetails("Duration:", movie.duration)}
                    {this.displayMovieDetails("Director:", movie.director)}
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={ClapperImage}
                    className={classes.cardMedia}
                    title="Watch Movie"
                  />
                </CardContent>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.description}
                </Typography>
              </CardContent>
              {this.displayRatings(movie.reviews)}
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export function mapStateToProps(state) {
  return {
    movies: state.app.movies || []
  };
}

const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps)
);

export default enhance(movieGrid);
