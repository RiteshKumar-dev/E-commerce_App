import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiscountNavbar from "./components/DiscountNavbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DiscountNavbar />
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
