import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import {
  fetchPopularGoods,
  PopularGoodsSelectors,
} from "../../store/popularGoodsSlice";
import { Header } from "../../components/Header";
import {
  CategoriesSelectors,
  fetchCategories,
} from "../../store/categorySlice";

const { Meta } = Card;

export function CategoryPage() {
  //   const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const navigate = useNavigate();
  const useCategories = useParams();
  const id = useCategories.type;
  const params = "ids=" + id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularGoods());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCategories(params));
  }, [dispatch, params]);

  const popGoods = useSelector(PopularGoodsSelectors);
  const category = useSelector(CategoriesSelectors);
  // let categories = []
  // if (popGoods) {
  //  return  categories = popGoods.find((el) => el.category.id === id);
  // } else if(category) {
  // return  categories = category
  // }
  console.log(category);
  const popGoodsFind = popGoods.find((el) => el.category.id === id);
  const categoryFind = category.find((el) => el.id === id);
  if (popGoodsFind) {
    return (
      <div>
        <Header />
        <div
          key={popGoodsFind.category.label}
          style={{ paddingBottom: "20px" }}
          className="site-card-wrapper"
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              background: "grey",
              width: "100%",
            }}
            className="center"
          >
            {popGoodsFind.category.label}
          </h2>
          <Row gutter={16}>
            {popGoodsFind.items.map((item) => {
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
  } else if (categoryFind) {
    return (
      <div>
        <Header />
        {category.map((item) => {
          return (
            <div
              key={item.label}
              style={{ paddingBottom: "20px" }}
              className="site-card-wrapper"
            >
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
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <span>
        Sorry, there is no such product. Please, go{" "}
        <a onClick={() => navigate(-1)}>Back</a> and try something else.{" "}
      </span>
    );
  }
}
