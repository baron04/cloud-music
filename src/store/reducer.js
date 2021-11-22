import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../applications/Recommend/store";

export default combineReducers({
  recommend: recommendReducer,
});
