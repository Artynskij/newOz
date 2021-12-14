import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { getGoodCategories } from "./selectors"; ---
import { reducer as reducerCategory } from "./categorySlice";
import { reducer as reducerGoods } from "./goodsSlice";
import { reducer as reducerPopularGoods } from "./popularGoodsSlice";





export const rootReducer = combineReducers({
  categories: reducerCategory,
  goods: reducerGoods,
  popularGoods: reducerPopularGoods
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
