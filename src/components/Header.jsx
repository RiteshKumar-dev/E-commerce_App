import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/assets/logo.svg";
import logout from "../assets/assets/logout.svg";
import user from "../assets/assets/user.svg";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpened, setMenuOpend] = useState(false);
  const toggleMenu = () => {
    setMenuOpend(!menuOpened);
  };
  const { getTotalCartItems } = useContext(ShopContext);

  const handleMenuItemClick = () => {
    setMenuOpend(false);
  };

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 8 }}
      className="fixed top-0 left-0 m-auto mx-auto px-6 lg:px-20 w-full bg-white ring-1 ring-slate-900/5 z-10 mt-11"
    >
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
        <div>
          <Link to={"/"}>
            <img
              src={
                "https://st2.depositphotos.com/16136362/43077/v/450/depositphotos_430779106-stock-illustration-travel-cart-vector-logo-design.jpg"
              }
              alt="Brand_Logo"
              height={50}
              width={50}
            />
          </Link>
        </div>
        <Navbar
          cantainerStyles={
            "hidden md:flex gap-x-5 xl:gap-x-10 text-[15px] font-[600]"
          }
          handleMenuItemClick={handleMenuItemClick}
        />
        <Navbar
          cantainerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-28 right-8 p-12 bg-white rounded-3xl shadow-md w-64 text-[16px] font-[600] ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex items-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 text-[16px] font-[600] ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
          handleMenuItemClick={handleMenuItemClick}
        />
        <div className="flex items-center justify-between sm:gap-x-2 text-[16px] font-[700]">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full  hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full  hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
          <div className="flex items-center justify-between cursor-pointer sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white text-[14px] font-[600] -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            <NavLink
              to={"/auth/signin"}
              className={
                "flex items-center justify-center text-[15px] font-[600] border border-secondary bg-secondary px-7 py-3 text-white transition-all  rounded-full gap-x-2"
              }
              onClick={handleMenuItemClick}
            >
              <img
                src={user}
                alt="login_icon"
                className=""
                height={19}
                width={19}
              />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
