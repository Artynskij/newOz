import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main"
import { ProductPage } from "./pages/ProductPage";
import { CategoryPage } from "./pages/CategoryPage"


function App() {

  return (
    <div className="App" style={{minWidth: "1000px",maxWidth: "1400px", margin:"15px"}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:type" element={<CategoryPage />} />
        <Route path="/:type/:id" element={<ProductPage />} />
        {/* <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
