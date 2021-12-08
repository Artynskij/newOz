import { CATEGORIES_ACTIONS } from "./constants";
import { Api } from "../../api";
// import { Categories } from "./type";

export const getCategories = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES});

export const getCategoriesSuccess = (categories) => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload: categories
});
export const getCategoriesFailure = () => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE
})


export const fetchCategories = () => async (dispatch) => {
   dispatch(getCategories());
   Api.getCategories()
    .then(({categories}) => {
        dispatch(getCategoriesSuccess(categories));
    })
    .catch(()=>{
        dispatch(getCategoriesFailure());
    });
}