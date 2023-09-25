import { combineReducers } from "redux";

import Reducer from "./Reducer";

const reducers = combineReducers({
    action: Reducer,
})
export default reducers ;