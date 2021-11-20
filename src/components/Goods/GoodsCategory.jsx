import React from "react";
import { Card, Col, Row } from "antd";
import { Selectors } from "../../store";
import { useSelector } from "react-redux";
import css from "./GoodsCategory.css";
// import 'Goods.css'

const { Meta } = Card;



export const GoodsCategory = () => {
  const goods = useSelector(Selectors.getGoods)
  return (
    <div>
      {goods.map((item) => {
        return (
          <div style={{paddingBottom:"20px"}} className="site-card-wrapper">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                background: "grey",
                width: "100%",
              }}
              className="center"
            >
              {item.label}
            </h2>
            <Row gutter={16}>
              {item.data.map((item) => {
                return (
                  <Col span={4}>
                    <Card
                      hoverable
                      style={{ width: "200px", paddingLeft: "15px" }}
                      cover={
                        <img
                          alt="example"
                          src={item.img}
                        />
                      }
                    >
                      <Meta
                        title={item.name}
                        description={"цена " + item.price}
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
};




