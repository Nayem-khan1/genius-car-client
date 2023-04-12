import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import search from "../../assets/icons/Search.png";
import cart from "../../assets/icons/cart.png";
import { AuthContext } from "../../contaxts/AuthProvider/AuthProvider";

const Header = () => {
  const { name, age } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-20 mb-12 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="">
          <img className="h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold text-[#444444]">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="mr-5 w-6" src={cart} alt="" />
        <img className="mr-8 w-6" src={search} alt="" />
        <Link
          to="/login"
          className="font-semibold text-lg px-10 py-2 border border-[#FF3811]  text-[#FF3811] text-center rounded hover:bg-[#FF3811] hover:text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
