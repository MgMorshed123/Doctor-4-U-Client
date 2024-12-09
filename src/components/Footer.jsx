import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="">
      <div>
        {/* left */}
        <div className="">
          <img src={assets.logo} alt="" srcset="" />
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
