import { RootState } from "../store";

// export const getCategories = (state) => state.categoryItems.categories
export const getCategories = (state) => state.categoryItems
export const getCategoriesLoadStatus = (state) => state.reducerCategory.loadStatus