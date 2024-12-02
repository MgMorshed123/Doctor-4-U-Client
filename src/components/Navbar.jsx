import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between  items-center text-sm py-4 border-b  border-gray-400">
      <img to="/" className="w-44 cursor-pointer" src={""} alt="" srcset="" />
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
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/login")}
          className=" bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
