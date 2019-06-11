import initialState from './initialState'
import { REQUEST_MOVIES, RECEIVE_MOVIES, ERROR_MOVIES } from "./../actions/actionTypes";
import moviesData from "../data/movies.json";

export default (state = initialState.movies, action) => {
  
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    
    default:
      return state
  }
}