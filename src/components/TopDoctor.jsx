import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

const TopDoctor = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium ">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-3">
        {doctors.slice(0, 10).map((item, index) => {
          return (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translate-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" srcset="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-700 ">
                  <p className="w-2 h-2 rounded-full bg-green-700"></p>
                  <p className="text-green-700">Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm ">{item.speciality}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="bg-blue-50 text-gray-600 text-sm ">View All</button>
    </div>
  );
};

export default TopDoctor;
