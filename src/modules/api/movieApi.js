import Constants from "../constants/movieAppConstants";

const MovieAppApi = (() => {
  function fetchMovies(endPoint) {
    const url = Constants.apiDomain + endPoint;
    return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      return response.json();
    });
  }
  return {
    fetchMovies
  };
})();

export default MovieAppApi;
