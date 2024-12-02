import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center text-sm py-4 border-b  border-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" srcset="" />
      <ul className="hidded  md:flex items-start gap-5 font-medium ">
        <NavLink to="/">
          <li className="py-2">Home</li>
          <hr className="border-none h-0.5 bg-primary w-3/5  m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-2">All Doctors </li>
          <hr className="border-none h-0.5 bg-primary w-3/5  m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-2">About</li>
          <hr className="border-none h-0.5 bg-primary w-3/5  m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-2">Contact</li>
          <hr className="border-none h-0.5 bg-primary w-3/5  m-auto hidden" />
        </NavLink>
      </ul>
      <button>Create Account</button>
    </div>
  );
};

export default Navbar;
