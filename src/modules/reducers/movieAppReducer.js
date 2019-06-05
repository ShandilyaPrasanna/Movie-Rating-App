import MovieAppUtils from "../utils/movieAppUtils";
import Constants from "../constants/movieAppConstants";

const defaultState = {
  loading: false,
  movies: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case Constants.actions.GET_MOVIES:
      return {
        ...state,
        loading: false,
        movies: MovieAppUtils.getMappedData(action.payload)
      };

    case Constants.actions.IS_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
