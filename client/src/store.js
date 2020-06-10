import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers"; //index.js file

const logger = createLogger({
  collapsed: true,
  diff: true,
});

//initital state for store
const initialState = {};

//1st arg: reducer, 2nd arg: state, 3rd: enhancer
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
