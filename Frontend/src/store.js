import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import setAuthToken from "utils/setAuthToken";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

/*
  NOTE: set up a store subscription listener
  to store the users token in localStorage
 */

/*
  initialize current state from redux store for subscription comparison
  preventing undefined error
 */


export { store };
