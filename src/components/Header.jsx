import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10  lg:px-20 mt-5">
      {/* left side  */}

      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl  lg:text-4xl text-white font-semibold md:leading-tight leading-tight lg:leading-tight">
          {" "}
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white font-light ">
          <img src={assets.group_profiles} alt="" srcset="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden md:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full"
          href="#speciality"
        >
          Book Appointment
          <img src={assets.arrow_icon} className="w-4" alt="" srcset="" />
        </a>
      </div>

      {/*  right side  */}

      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Header;
