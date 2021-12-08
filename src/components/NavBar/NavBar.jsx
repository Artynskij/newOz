import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesSelectors } from '../../store/categorySlice';
import { fetchCategories } from '../../store/categorySlice';
import { rootReducer } from '../../store/store';



const Test = [1,2,3]
export const NavBar = () => {

  
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const categories = useSelector(CategoriesSelectors.getCategories) 

  const dispatch = useDispatch()
  useEffect (() => {
    dispatch(fetchCategories());
}, [dispatch])
console.log(categories);
  return (
    <Menu mode="inline" openKeys={openKeys} style={{ width: 256 }}>
      {categories.map((item) => {
       return <Menu.Item key={item.id}><Link  to={item.type} key={item.id}>{item.name}</Link></Menu.Item>
      })}
    
    </Menu>
  );
};


