import { combineReducers } from "redux";
import React from "react";
import Reducer from "./Reducer";

const reducers = combineReducers({
    action: Reducer,
})
export default reducers ;