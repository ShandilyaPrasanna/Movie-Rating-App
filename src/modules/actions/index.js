import MovieAppApi from "../api/movieApi";
import Constants from "../constants/movieAppConstants";

export function getMoviesAction(endPoint) {
  return function(dispatch) {
    MovieAppApi.fetchMovies(endPoint)
      .then(result => {
        dispatch({ type: Constants.actions.GET_MOVIES, payload: result });
      })
      .catch(error => {
        console.error("Something went wrong", error);
        dispatch(isLoading(false));
      });
  };
}

export function isLoading(bool) {
  return { type: Constants.actions.IS_LOADING, payload: bool };
}
