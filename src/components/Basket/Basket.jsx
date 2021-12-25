import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BasketSelectors, fetchBasket } from "../../store/basketSlice";

export const Basket = (show) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch]);
  const basketGoods = useSelector(BasketSelectors);
  console.log(basketGoods);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div onClick={showModal}>
        <div className={styles.value_basket}>0</div>
        <img
          className={styles.basket}
          src="https://cdn-icons-png.flaticon.com/512/3081/3081822.png"
          alt="basket"
        />
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
