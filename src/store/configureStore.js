import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers'
import thunk from "redux-thunk";

export default () => {
  const middlewares = [thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    // initialState,
    {},
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
  return store;
}