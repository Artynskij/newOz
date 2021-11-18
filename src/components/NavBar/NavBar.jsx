import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Item from 'antd/lib/list/Item';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const categories = [
    {
        id: 1,
        type: "Toys",
        name: "Игрушки",
    },
    {
        id: 2,
        type: "Books",
        name: "Книги",
    },
    {
        id: 4,
        type: "Sport",
        name: "Спорт",
    },
    {
        id: 5,
        type: "Cosmo",
        name: "Косметика",
    },
    {
        id: 6,
        type: "Active",
        name: "Активность",
    },
    {
        id: 7,
        type: "Baby",
        name: "Детям",
    },
    {
        id: 8,
        type: "Suvenir",
        name: "Сувениры",
    },
    {
        id: 9,
        type: "House",
        name: "Для дома",
    },
    {
        id: 10,
        type: "Health",
        name: "Здоровье",
    },
    {
        id: 11,
        type: "Parfume",
        name: "Парфюмерия",
    },
    {
        id: 12,
        type: "Black market",
        name: "Чёрный рынок",
    },
]
const Test = [1,2,3]
export const NavBar = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  

  return (
    <Menu mode="inline" openKeys={openKeys} style={{ width: 256 }}>
      {categories.map((item) => {
       return <Menu.Item key={item.id}><Link to="/GoodsCategory" key={item.id}>{item.name}</Link></Menu.Item>
      })}
    
    </Menu>
  );
};


