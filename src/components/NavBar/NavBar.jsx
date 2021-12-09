import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesSelectors } from '../../store/categorySlice';
import { fetchCategories } from '../../store/categorySlice';
import { Api } from '../../api';





const Test = [1,2,3]
export const NavBar = () => {
let i = []
  const test1 = Api.getTest()
  const test2 = test1.then(item => i = item)
  console.log(i);
  console.log(test2);
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const categories = useSelector(CategoriesSelectors) 
  console.log(categories);
  const dispatch = useDispatch()
  useEffect (() => {
    dispatch(fetchCategories());
})

  return (
    <Menu mode="inline" openKeys={openKeys} style={{ width: 256 }}>
      {categories.map((item) => {
       return <Menu.Item key={item.id}><Link  to={item.type} key={item.id}>{item.name}</Link></Menu.Item>
      })}
    
    </Menu>
  );
};


