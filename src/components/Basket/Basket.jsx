import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Card, Col, Row } from "antd";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketSelectors,
  fetchBasket,
  LOAD_STATUSES,
} from "../../store/basketSlice";
import { getBasketLoadStatus } from "../../store/basketSlice/selectors";

const { Meta } = Card;

export const Basket = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch]);

  const basketGoods = useSelector(BasketSelectors);
console.log(basketGoods);
  let goods = [];

  if (basketGoods.length === 0) {
    goods = [{ label: "У вас нету товаров", id: 1 }];
  } else {
    goods = basketGoods;
  }

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
        <div className={styles.value_basket}>{basketGoods.length}</div>
        <img
          className={styles.basket}
          src="https://cdn-icons-png.flaticon.com/512/3081/3081822.png"
          alt="basket"
        />
      </div>
      <Modal
        title="Корзина"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {goods.map((item) => {
          return (
            <Col key={item.id} span={4}>
              <Card
                hoverable
                style={{
                  width: "200px",
                  marginBottom: "30px",
                  paddingLeft: "15px",
                }}
                cover={<img alt="example" src={item.img} />}
              >
                <Meta title={item.label} description={"цена " + item.price} />
              </Card>
            </Col>
          );
        })}
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
    </>
  );
};
