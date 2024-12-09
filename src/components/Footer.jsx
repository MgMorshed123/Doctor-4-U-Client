import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm">
        {/* left */}
        <div className="">
          <img src={assets.logo} className="mb-5 w-40" alt="" srcset="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim in
            facilis officiis tenetur magni consequatur.
          </p>
        </div>
        {/*  center*/}
        <div>
          <p> </p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacty Policy </li>
          </ul>
        </div>

        {/* rightt*/}
        <div>
          <p>Get In Touch </p>
          <li>+321323123</li>
          <li>mdarfinji452gmail.com</li>
        </div>
      </div>

      <div>
        <hr />
        <p>Copyright 2024</p>
      </div>
    </div>
  );
};

export default Footer;
