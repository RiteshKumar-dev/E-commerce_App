import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdCallToAction,
  MdCategory,
  MdContacts,
  MdHomeFilled,
  MdShop2,
} from "react-icons/md";

const Navbar = ({ cantainerStyles, handleMenuItemClick }) => {
  const scrolTp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className={`${cantainerStyles}`}>
      <NavLink
        onClick={handleMenuItemClick}
        to={"/"}
        className={({ isActive }) => (isActive ? `active_link` : "")}
      >
        <div
          className="flex items-center justify-center gap-x-1"
          onClick={() => scrolTp()}
        >
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        onClick={handleMenuItemClick}
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div
          className="flex items-center justify-center gap-x-1"
          onClick={() => scrolTp()}
        >
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink
        onClick={handleMenuItemClick}
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div
          className="flex items-center justify-center gap-x-1"
          onClick={() => scrolTp()}
        >
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink
        onClick={handleMenuItemClick}
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div
          className="flex items-center justify-center gap-x-1"
          onClick={() => scrolTp()}
        >
          <MdContacts />
          Kids's
        </div>
      </NavLink>
      <NavLink
        onClick={handleMenuItemClick}
        to={"/more"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div
          className="flex items-center justify-center gap-x-1"
          onClick={() => scrolTp()}
        >
          <MdCallToAction />
          More...
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
