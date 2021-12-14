import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import {
  fetchPopularGoods,
  PopularGoodsSelectors,
} from "../../store/popularGoodsSlice";



const { Meta } = Card;



export function CategoryPage() {
//   const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const navigate = useNavigate();
  const useCategories = useParams();
  const id = useCategories.type;

  const goods = useSelector(PopularGoodsSelectors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularGoods(id));
  }, [dispatch, id]);
console.log(goods);

  const categories = goods.find((el) => el.category.id === id);
  if (!categories) {
    return (
      <span>
        Sorry, there is no such product. Please, go{" "}
        <a onClick={() => navigate(-1)}>Back</a> and try something else.{" "}
      </span>
    );
  }
  return (
    <div>
      <div style={{ paddingBottom: "20px" }} className="site-card-wrapper">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            background: "grey",
            width: "100%",
          }}
          className="center"
        >
          {categories.category.label}
        </h2>
        <Row gutter={16}>
          {categories.items.map((item) => {
            return (
              <Col span={4}>
                <Link to={`${item.id}`}>
                  <Card
                    hoverable
                    style={{ width: "200px", paddingLeft: "15px" }}
                    cover={<img alt="example" src={item.img} />}
                  >
                    <Meta
                      title={item.label}
                      description={"цена " + item.price}
                    />
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
