import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import {fetchCategories , CategoriesSelectors } from "../../store/categorySlice";


export const NavBar = () => {
  const categories = useSelector(CategoriesSelectors);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
console.log(categories);
  return (
    <Menu mode="inline" style={{ width: 256 }}>
      {categories.map((item) => {
        return (
          <Menu.Item key={item.id}>
            <Link to={item.id} key={item.id}>
              {item.label}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
