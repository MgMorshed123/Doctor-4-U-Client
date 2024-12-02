import React from "react";
import { doctors } from "../assets/assets_frontend/assets";

const TopDoctor = () => {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => {
          return (
            <div key={index} className="flex gap-3">
              <img src={item.image} alt="" srcset="" />
              <div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDoctor;
