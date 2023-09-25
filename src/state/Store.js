import { createStoreHook } from "react-redux";
import Reducer from "./Reducer/Reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


export const store = createStoreHook(Reducer, applyMiddleware(thunk))