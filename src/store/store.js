import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer";


// import { reducer as counterReducer } from "./counterSlice";
// import { reducer as usersReducer } from "./usersSlice";
export const store = createStore(reducer)



