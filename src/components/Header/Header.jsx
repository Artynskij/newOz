import styles from "./styles.module.css";
import { Input } from "antd";
import { Button } from "antd";
import { Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Basket } from "../Basket";
import { useDispatch, useSelector } from "react-redux";
import { fetchBasket } from "../../store/basketSlice";
import { useEffect, useState } from "react";
import { fetchGoods, GoodsSelectors } from "../../store/goodsSlice";

const { Search } = Input;

export const Header = (props) => {
  const goods = useSelector(GoodsSelectors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  // const findNameGoods = goods.filter(good => {
  //   good.name.toLowerCase().includes(value.toLowerCase);
  // });
  // console.log(findNameGoods);
  const searchGoods = () => {};
  const [value, setValue] = useState("");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchBasket());
  // }, [dispatch]);

  const test = () => {
    return <div>Test</div>;
  };

  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <div className={styles.container_logo}>
          <img
            className={styles.logo}
            src="https://gzt-akray.by/wp-content/uploads/2021/09/logo.png"
            alt="logo"
          />
        </div>
      </Link>

      <div className={styles.container_find}>
        <div>
          number, Закажите звонок или напишите намПодарки на Новый год 2022
        </div>

        <div className={styles.searchGoods}>
          <Input
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <Link to="/Goods">
            <div>
              {" "}
              <Button icon={<SearchOutlined />} />
            </div>
          </Link>

          {/* <Link>
            <div>Search</div>
          </Link> */}
        </div>
      </div>

      <div className={styles.container_basket}>
        <Basket />
      </div>
      <div>
        <div className={styles.container_login}>
          <div>
            <Link to={"/login"}>
              <Button type="primary">Войти</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
