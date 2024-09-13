import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Home from "./component/home";
import NavBar from "./component/navbar";
import ProductDatails from "./component/productDetails";
import axios from "axios";
import { useDispatch } from "react-redux";
import CartItemList from "./component/cardItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDatails />} />
        <Route path="/cart" element={<CartItemList />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
