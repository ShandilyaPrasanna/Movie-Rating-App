import MovieAppUtils from "../utils/movieAppUtils";
import { cloneDeep } from "lodash";
import Constants from "../constants/movieAppConstants";

const defaultState = {
  loading: false,
  movies: []
};

export default function(state = defaultState, action) {
  const newState = cloneDeep(state);
  switch (action.type) {
    case Constants.actions.GET_MOVIES:
      newState.loading = false;
      newState.movies = MovieAppUtils.getMappedData(action.payload);
      return newState;

    case Constants.actions.IS_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
