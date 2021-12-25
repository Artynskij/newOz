import styles from "./styles.module.css";
import { Input } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Basket } from "../Basket";

const { Search } = Input;

export const Header = () => {
  
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
        <div>
          <Search
            placeholder="Введите название товара"
            enterButton="Search"
            size="large"
          />
        </div>
      </div>

      <div className={styles.container_basket}>
        <Basket />
      </div>
      <div>
        <div className={styles.container_login}>
          <div>
            <Button type="primary">Войти</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
