import React from "react";
import { Card, Col, Row } from "antd";

import css from "./GoodsCategory.css";
// import 'Goods.css'

const { Meta } = Card;
// async function getDataMovieBase() {
//   const response = await fetch("../public/data.json");
//   const goods = await response.json();
  
// }



const goods = [
  {
    label: "Игрушки",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Книги",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Спорт",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Косметика",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Активность",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Детям",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Сувениры",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Для дома",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Сувениры",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Парфюмерия",
    data: [
      {
        id: 1,
        category_type: "Toys",
        name: "Marvel",
        price: 199,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "Books",
        name: "HotWheels",
        price: 299,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        category_type: "Sport",
        name: "Микки",
        price: 399,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    label: "Чёрный рынок",
    data: [
      {
        id: 1,
        category_type: "Black market",
        name: "Ак-74",
        price: '1.999',
        img: "https://popadiv10.ru/image/catalog/product/3275/shp-avtomat-kalashnikova-os-ak-74m-oholoshchennyy-10.jpg",
      },
      {
        id: 2,
        category_type: "Black market",
        name: "Glock-19",
        price: '799',
        img: "https://worldweapon.info/sites/default/files/gun_revolvers/glock19.png",
      },
      {
        id: 3,
        category_type: "Black market",
        name: "РПГ-7",
        price: '3.099',
        img: "https://nplus1.ru/images/2017/04/11/14df347b7c06510a136b3dad80d81aea.jpg",
      },
      {
        id: 4,
        category_type: "Black market",
        name: "Кокс 200кг",
        price: '301.099',
        img: "https://imgtest.mir24.tv/uploaded/images/crops/2021/February/870x489_0x101_detail_crop_20210224060931_bc474ccc_df60dbfc913a8e84f44ece0657b175f4dbf95ec02ad04eec0fff6a9a59b6cb36.jpg",
      },
      {
        id: 5,
        category_type: "Black market",
        name: "ah-64 apache",
        price: '17.000.000',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AH-64D_Apache_Longbow.jpg/1200px-AH-64D_Apache_Longbow.jpg",
      },
      {
        id: 6,
        category_type: "Black market",
        name: "Т-90",
        price: '3.990.000',
        img: "https://militaryarms.ru/wp-content/uploads/2019/12/t-90a.jpg",
      },
    ],
  },
];
export const GoodsCategory = () => {
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




