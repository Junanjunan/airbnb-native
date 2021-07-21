import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import roomsSlice from "./roomsSlice";

export default combineReducers({
    usersReducer,
    roomsSlice
})