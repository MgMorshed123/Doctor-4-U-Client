import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center text-sm py-4 border-b  border-gray-400">
      <img src={assets.logo} alt="" srcset="" />
      <ul>
        <NavLink>
          <li>Home</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>All Doctors </li>
          <hr />
        </NavLink>
        <NavLink>
          <li>About</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Contact</li>
          <hr />
        </NavLink>
      </ul>
      <button>Create Account</button>
    </div>
  );
};

export default Navbar;
