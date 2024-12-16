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
          className="w-40 h-16 cursor-pointer "
          src={assets.DOCTOSB4U}
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
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
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

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
          srcset=""
        />
        {/* obile menu */}
        <div
          className={` ${
            showMenu ? "fixed w-full " : "h-0 w-0"
          }  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-3 text-lg font-medium">
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`/doctors`}>All Doctors</NavLink>
            <NavLink to={`/about`}>About </NavLink>
            <NavLink to={`/contact`}>Contact</NavLink>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
