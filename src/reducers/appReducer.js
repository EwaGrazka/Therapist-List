import mainReducer from "./listReducers";

import { combineReducers } from "redux";

const appReducer = combineReducers({
  main: mainReducer,
});

export default appReducer;
