import React from "react";
import { doctors } from "../assets/assets_frontend/assets";

const TopDoctor = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium ">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div>
        {doctors.slice(0, 10).map((item, index) => {
          return (
            <div key={index} className="flex ">
              <img src={item.image} alt="" srcset="" />
              <div>
                <div>
                  <p></p>
                  <p>Available</p>
                </div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
      <button>View All</button>
    </div>
  );
};

export default TopDoctor;
