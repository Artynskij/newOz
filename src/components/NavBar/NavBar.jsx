import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { Selectors } from '../../store/categorySlice';



const Test = [1,2,3]
export const NavBar = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const categories = useSelector(Selectors)  
console.log(categories);
  return (
    <Menu mode="inline" openKeys={openKeys} style={{ width: 256 }}>
      {categories.map((item) => {
       return <Menu.Item key={item.id}><Link  to={item.type} key={item.id}>{item.name}</Link></Menu.Item>
      })}
    
    </Menu>
  );
};


