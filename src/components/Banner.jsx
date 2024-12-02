import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  return (
    <div>
      {/* left */}
      <div>
        <div>
          <p>Book Appointment</p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button>Create Appointment</button>
      </div>

      {/* right */}

      <div>
        <img src={assets.appointment_img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Banner;
