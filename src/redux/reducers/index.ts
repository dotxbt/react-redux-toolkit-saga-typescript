import { combineReducers } from "redux";
import counterSlice from "./counterSlice";
import postReducer from "./postReducer";

export default combineReducers({
    counter: counterSlice,
    post: postReducer,
})