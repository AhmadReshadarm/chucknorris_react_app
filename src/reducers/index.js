import Loaded from "./isLoaded";
import faved from "./favrated";
import showLocal from "./showLocal";
import items from "./deleteItem";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Loaded,
  faved,
  showLocal,
  items,
});

export default rootReducer;
