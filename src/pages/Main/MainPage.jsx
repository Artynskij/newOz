import React from "react";
import { NavBar } from "../../components/NavBar";
import { Market } from "../../components/Market";
import { GoodsCategory } from "../../components/Goods";
import { Header } from "../../components/Header";


export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div><Header/></div>
        <div style={{ display: "flex" }}>
          <NavBar />
          <Market />
        </div>

        <GoodsCategory />
      </div>
    );
  }
}
