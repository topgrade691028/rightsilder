// third-party
import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
const reducers = combineReducers({ uiReducer: uiReducer });

export default reducers;
