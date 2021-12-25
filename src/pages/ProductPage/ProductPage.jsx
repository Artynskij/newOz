import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Card } from "antd";
import style from "./ProductPage.module.css";
import { fetchGoods, GoodsSelectors } from "../../store/goodsSlice";
import { Header } from "../../components/Header";
import { Api } from "../../api";
import { changeBasket } from "../../store/basketSlice";

export const BUTTON_STATUS = {
  putInBasket: "Положить в корзину",
  delFromBasket: "Удалить из корзины",
};

export function ProductPage() {
  const [stateButton, setCount] = useState(false);

  const allGoods = useSelector(GoodsSelectors);
  
  const useCategories = useParams();
  const { type, id } = useCategories;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods(id));
  }, [dispatch, id]);
  const navigate = useNavigate();

  

  const product = allGoods.find((el) => el.id === id);

  if (!product) {
    return (
      <span>
        Sorry, there is no such product. Please, go{" "}
        <a onClick={() => navigate(-1)}>Back</a> and try something else.{" "}
      </span>
    );
  }
 
  const toggleColor = () => {
    if (stateButton) {
      return "grey";
    }
    return "#f07800";
  };

  // const checkBack = () => {
  //   if (stateButton) {
  //     return setCount(!stateButton), api.changeCart(product.cart, "DELETE");
  //   }
  //   return setCount(!stateButton), api.changeCart(product, "PUT");
  // };

  const checkBack = () => {
    if (stateButton) {
      return setCount(!stateButton),  dispatch(changeBasket(product, BUTTON_STATUS.delFromBasket))
    }
    return setCount(!stateButton), dispatch(changeBasket(product, BUTTON_STATUS.putInBasket));
  };

  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.container_img}>
          <img className={style.img} src={product.img} alt="img" />
        </div>
        <div className={style.container_discription}>
          <h2 className={style.product_name}>{product.label}</h2>
          <div className={style.discription_price}>{product.price} $</div>
          <button
            className={style.putbasket}
            onClick={checkBack}
            style={{ background: `${toggleColor()}` }}
          >
            положить в корзину
          </button>
          <div className={style.discription_discription}>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
}
