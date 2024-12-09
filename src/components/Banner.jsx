import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 lg:px-12 my-20 md:mx-20">
      {/* left */}
      <div className="flex-1 py-8  md:py-16 lg:py-24  lg:pl-5 ">
        <div>
          <p>Book Appointment</p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button>Create Appointment</button>
      </div>

      {/* right */}

      <div className="hidden md:block md:w-1/2  lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Banner;
