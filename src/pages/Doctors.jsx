import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { use } from "react";

const Doctors = () => {
  const { speciality } = useParams;
  console.log(speciality);

  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((item) => item.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>General physician</div>
        <div>Gynecologist</div>
        <div>Dermatologist</div>
        <div>Pediatricians</div>
        <div>Neurologist</div>
        <div>Gastroenterologist</div>
      </div>
      <div>
        {filterDoc.map((item, index) => {
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
    </div>
  );
};

export default Doctors;
