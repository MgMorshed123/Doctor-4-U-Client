import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { use } from "react";

const Doctors = () => {
  const { speciality } = useParams();
  console.log(speciality);

  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState();

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
      <p className="text-gray-600 flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((PREV) => !PREV)}
        >
          Filters
        </button>
        <div
          className={`  flex-col gap-4 text-gray-600  ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate(`/doctors/General physician`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-200 border border-green-500 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer${
              speciality === "Gynecologist"
                ? "bg-indigo-200 border border-green-500 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate(`/doctors/Gynecologist`)
            }
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate(`/doctors/Dermatologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer${
              speciality === "Dermatologist"
                ? "bg-indigo-200 border border-green-500 text-black"
                : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate(`/doctors/Pediatricians`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer${
              speciality === "Pediatricians"
                ? "bg-indigo-200 border border-green-500 text-black"
                : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate(`/doctors/Neurologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer${
              speciality === "Neurologist"
                ? "bg-indigo-200 border border-green-500 text-black"
                : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate(`/doctors/Gastroenterologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer${
              speciality === "Gastroenterologist"
                ? "bg-indigo-200 border border-green-500 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
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
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm ">{item.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
