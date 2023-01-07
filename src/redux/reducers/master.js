import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import userReducer from "./userReducer";

export default combineReducers({
  counter: CounterReducer,
  user:userReducer
})