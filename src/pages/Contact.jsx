import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-2xl pt-10">
        <p>
          Contact <span>Us </span>
        </p>
      </div>

      <div>
        <img src={assets.contact_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Contact;
