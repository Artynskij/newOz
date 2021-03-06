import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Card } from "antd";
import style from "./ProductPage.module.css";
import { fetchGoods, GoodsSelectors } from "../../store/goodsSlice";
import { Header } from "../../components/Header";
import { Api } from "../../api";
import { changeBasket, BasketSelectors } from "../../store/basketSlice";
import { getBasketLoadStatus } from "../../store/basketSlice/selectors";
import { LOAD_STATUSES } from "../../store/categorySlice";

export const BUTTON_STATUS = {
  putInBasket: "Положить в корзину",
  delFromBasket: "Удалить из корзины",
};

export function ProductPage() {
  let [stateButton, setStateButton] = useState(true);
  const [labelButton, setLabelButton] = useState(BUTTON_STATUS.putInBasket);

  const allGoods = useSelector(GoodsSelectors);

  const useCategories = useParams();
  const { type, id } = useCategories;
  const idGood = "ids=" + id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods(idGood));
  }, [dispatch, idGood]);
  const navigate = useNavigate();
  const basketGoods = useSelector(BasketSelectors);

  //  function checkBasket () {
  //   const _haveBasketGoods = basketGoods.find(el => el.id === id)
  //   if () {
  //    return setCount(!stateButton)
  //   } return console.log(231);
  //  }
  //  checkBasket()

  const cardLoadStatus = useSelector(getBasketLoadStatus);

  const product = allGoods.find((el) => el.id === id);

  if (!product) {
    return (
      <span>
        Sorry, there is no such product. Please, go{" "}
        <a onClick={() => navigate(-1)}>Back</a> and try something else.{" "}
      </span>
    );
  }

  const _haveBasketGoods = basketGoods.find((el) => el.parentId === id);

  console.log(basketGoods.length);
  function haveGoods() {
    if (_haveBasketGoods) {
      return (stateButton = false);
    }
  }

  const toggleColor = () => {
    haveGoods();
    return stateButton ? "#f07800" : "grey";
  };

  console.log(cardLoadStatus);

  const getGoodFromCart = () => basketGoods.find((el) => el.parentId === id);

  const checkBack = () => {
    const method = stateButton ? "PUT" : "DELETE";
    const buttonTitle = stateButton ? BUTTON_STATUS.delFromBasket : BUTTON_STATUS.putInBasket;

    setLabelButton(buttonTitle);
    setStateButton(!stateButton);

    const cartGood = stateButton ? product : getGoodFromCart();
    dispatch(changeBasket(cartGood, method));
  };

  return (
    <div>
      <Header goodsId={id} />
      <div className={style.container}>
        <div className={style.container_img}>
          <img className={style.img} src={product.img} alt="img" />
        </div>
        <div className={style.container_discription}>
          <h2 className={style.product_name}>{product.label}</h2>
          <div className={style.discription_price}>{product.price} $</div>
          <button
            disabled={cardLoadStatus !== LOAD_STATUSES.LOADED}
            className={style.putbasket}
            onClick={checkBack}
            style={{ background: `${toggleColor()}` }}
          >
            {labelButton}
          </button>
          <div className={style.discription_discription}>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
}