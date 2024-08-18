import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Layout from "./Layout";
import "./index.css";

import bannermens from "./assets/assets/bannermens.png";
import bannerwomens from "./assets/assets/bannerwomens.png";
import bannerkids from "./assets/assets/bannerkids.png";
import BannerImg from "./assets/assets/BannerImg.jpg";
import Signup from "./pages/Signup";
import MoreProducts from "./components/MoreProducts";

function App() {
  return (
    <main className="bg-white text-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/mens"
              element={<Category Category="men" banner={bannermens} />}
            />
            <Route
              path="/womens"
              element={<Category Category="women" banner={bannerwomens} />}
            />
            <Route
              path="/kids"
              element={<Category Category="kid" banner={bannerkids} />}
            />
            <Route
              path="/more"
              element={<MoreProducts Category="more" banner={BannerImg} />}
            />
            <Route path="/product/">
              <Route path=":ProductId" element={<Product />} />
            </Route>
            <Route path="/cart-page" element={<Cart />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/signin" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
