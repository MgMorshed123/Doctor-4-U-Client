import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10  lg:px-20">
      {/* left side  */}

      <div>
        <p>
          {" "}
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" srcset="" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="">
          Book Appointment
          <img src={assets.arrow_icon} className="w-4" alt="" srcset="" />
        </a>
      </div>

      {/*  right side  */}

      <div>
        <img src={assets.header_img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Header;
