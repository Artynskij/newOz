import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Card } from "antd";
import style from "./ProductPage.module.css";
import { fetchGoods, GoodsSelectors } from "../../store/goodsSlice";

const { Meta } = Card;

export function ProductPage() {
  const [stateButton, setCount] = useState(false);

  const allGoods = useSelector(GoodsSelectors);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);
  const navigate = useNavigate();
  const useCategories = useParams();

  const { type, id } = useCategories;

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
    return "green";
  };

  const checkBack = () => {
    setCount(!stateButton);
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.container_img}>
          <img className={style.img} src={product.img} alt="img" />
        </div>
        <div className={style.container_discription}>
          <h2 className={style.product_name}>{product.label}</h2>
          <div className={style.discription_price}>{product.price} $</div>
          <div className={style.discription_discription}>discription</div>
          <button
            onClick={checkBack}
            style={{ background: `${toggleColor()}` }}
          >
            создать компонент
          </button>
        </div>
      </div>
    </div>
  );
}
