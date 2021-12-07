import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
// import { getGoodCategories } from "./selectors"; ---
import { categoriesReducer } from "./categorySlice";
const rootReducer = combineReducers({
    // users: getUsers,
    // goods: getGoodCategories,
    categoryItems:categoriesReducer 

})


  
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));
  
  


