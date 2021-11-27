import React from "react";
import { Link } from "react-router-dom";
import { Selectors } from "../../store";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Card, Avatar } from 'antd';
import style from "./ProductPage.module.css"

const { Meta } = Card;

export function ProductPage() {
  const [stateButton, setCount] = useState(false);
  
  const allGoods = useSelector(Selectors.getGoods);
  const navigate = useNavigate();
  const useCategories = useParams();
  const {type , id} = useCategories
  const categories = allGoods.find((el) => el.data.type === type);
  const product = categories.items.find((el) => el.id === Number(id));
  if(!product) {
    return <span>Sorry, there is no such product. Please, go <a onClick={()=>navigate(-1)}>Back</a> and  try something else. </span>
  }
  const toggleColor = () => {
    if(stateButton) {
      return "grey"
    } 
    return "green"
  }
  const checkBack = () => {
setCount(!stateButton)
  }
  console.log(stateButton);
  return (
    <div>
     <div className={style.container}>
       <div className={style.container_img}><img className={style.img} src={product.img} alt="img" /></div>
       <div className={style.container_discription}>
      <h2 className={style.product_name}>{product.name}</h2>
       <div className={style.discription_price}>{product.price} $</div>
       <div className={style.discription_discription}>discription</div>
       <button onClick={checkBack}  style={{background:`${toggleColor()}`}} >создать компонент</button>
       </div>
       
     </div>
    </div>
  );
}
