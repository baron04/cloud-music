import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../applications/Recommend/store";
import { reducer as singersReducer } from "../applications/Singers/store";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
});
