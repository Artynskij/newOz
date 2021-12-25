import { BASKET_ACTIONS } from "./constants";
import { Api } from "../../api";
import { BUTTON_STATUS } from "../../pages/ProductPage/ProductPage";

export const getBasket = () => ({ type: BASKET_ACTIONS.GET_BASKET});

export const getBasketSuccess = (basket) => ({
  type: BASKET_ACTIONS.GET_BASKET_SUCCESS,
  payload: basket,
});
export const getBasketFailure = () => ({
  type: BASKET_ACTIONS.GET_BASKET_FAILURE,
});

export const fetchBasket = () => async (dispatch) => {
  dispatch(getBasket());
  const api = new Api();
  api
    .getСart()
    .then(( carts ) => {
      dispatch(getBasketSuccess(carts));
    })
    .catch(() => {
      dispatch(getBasketFailure());
    });
};

export const changeBasket =
  (data, status) => async (dispatch) => {
    let method = "";
    const api = new Api();
    if (status === BUTTON_STATUS.delFromCart) {
        return method = "DELETE"
      } else {method = "PUT"} 
        
      try {
        dispatch(getBasket());
        const resp = api.changeCart(data, method);
        if (resp.ok) {
          dispatch(fetchBasket());
        }
      } catch (err) {
        dispatch(getBasketFailure());
      }
    };
