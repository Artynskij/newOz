import React from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Selectors } from "../../store";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

export function CategoryPage() {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);


  const navigate = useNavigate();
  const useCategories = useParams();
  const typeCategories = useCategories.type;
  const goods = useSelector(Selectors.getGoods);
  const categories = goods.find((el) => el.data.type === typeCategories);
  if(!categories) {
    return <span>Sorry, there is no such product. Please, go <a onClick={()=>navigate(-1)}>Back</a> and  try something else. </span>
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
          {categories.data.name}
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
    </div>
  );
}
