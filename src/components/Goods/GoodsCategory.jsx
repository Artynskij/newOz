import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { Selectors } from "../../store";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import style from "./GoodsCategory.module.css";
import { Api } from "../../api"


const { Meta } = Card;



export const GoodsCategory = () => {
  // const goods = useSelector(Selectors.getGoods)
//   const goods1 = useSelector(Selectors.rootReducer)
//  console.log(rootReducer);
//  console.log(goods1);
// const [goods, set] = useState([])
const test = new Api()
const goods = test.getGoods().then(data => data)
// console.log(goods);

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
              {item.data.name}
            </h2>
            <Row gutter={16}>
              {item.items.map((item) => {
                return (
                  
                  <Col span={4}>
                    <Link to={`/${item.category_type}/${item.id}`}>
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
                    </Link>
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




