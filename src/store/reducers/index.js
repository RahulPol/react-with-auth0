import { combineReducers } from "redux";

import Reducer1 from "./reducer1";
import UserReducer from "./user_reducer";

const rootReducer = combineReducers({
  reducer1: Reducer1,
  user_reducer: UserReducer,
});

export default rootReducer;
