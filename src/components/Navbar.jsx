import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between  items-center text-sm py-4 border-b  border-gray-400">
      <NavLink to="/">
        <img
          to="/"
          className="w-40 h-20 cursor-pointer "
          src={assets.logo2}
          alt=""
          srcset=""
        />
      </NavLink>
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
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt=""
              srcset=""
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt=""
              srcset=""
            />
            <div className="absolute top-0 right-0 pt-16 text-base font-medium  text-gray-600 hidden group-hover:block">
              <div>
                <p>My Profile</p>
                <p>My Appointments</p>
                <p>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => navigate("/login")}
              className=" bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
