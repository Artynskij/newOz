import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main"
// import ReactDOM from 'react-dom';
// import { NavBar } from "./components/NavBar";
// import { Market } from "./components/Market";
import { GoodsCategory } from "./components/Goods";
import { SecPage } from "./pages/SecPage";

function App() {
  return (
    <div className="App">
      {/* <div style={{ display: "flex" }}>
        <NavBar />
        <Market />
      </div>

      <GoodsCategory /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SecPage" element={<SecPage />} />
        {/* <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
