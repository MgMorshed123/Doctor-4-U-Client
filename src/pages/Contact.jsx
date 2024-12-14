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
        <div>
          <p>OUR OFFICE</p>
          <p>
            00000 Willms Station
            <br />
          </p>

          <p>
            Email: greatstackdev@gmail.com <br /> USA Tel: (000) 000-0000
          </p>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore jobs </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
