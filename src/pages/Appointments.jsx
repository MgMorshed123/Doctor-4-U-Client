import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0); // Tracks selected day
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [slotTime, setSlotTime] = useState(0);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = () => {
    const today = new Date();
    const allSlots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); // Advance the date

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End time for the current day (9 PM)

      currentDate.setHours(10, 0, 0, 0); // Start time for slots (10 AM)

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedDate = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedDate,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment time by 30 minutes
      }

      allSlots.push({
        date: new Date(today.getTime() + i * 24 * 60 * 60 * 1000), // Properly calculate the date
        slots: timeSlots,
      });
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
              srcSet=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium">
              {docInfo.name}{" "}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt=""
                srcSet=""
              />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full ">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" srcSet="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4 ">
              Appointment Fee :{" "}
              <span className="text-gray-600">
                {currencySymbol} - {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full mt-4">
            <div className="flex gap-3 items-center w-full overflow-x-auto mt-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {docSlots.map((daySlot, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)} // Update slot index on click
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border-gray-200"
                  } `}
                >
                  <p>{daysOfWeek[daySlot.date.getDay()]}</p>
                  <p>
                    {daySlot.date.toLocaleDateString([], { day: "2-digit" })}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            {/* Time Slot Container */}
            <div className="flex gap-2 min-w-max overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {docSlots[slotIndex]?.slots.map((slot, index) => (
                <p
                  onClick={() => setSlotTime(slot.time)} // Set the selected slot time
                  key={index}
                  className={`text-sm font-light px-5 py-2 rounded-full cursor-pointer ${
                    slot.time === slotTime
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {slot.time}
                </p>
              ))}
            </div>
            <button className="bg-primary text-white text-sm font-light px-14  py-3  rounded-full my-6">
              Book An Appointment{" "}
            </button>
          </div>

          {/* related doctors  */}
          <RelatedDoctor
            docId={docId}
            speciality={docInfo.speciality}
          ></RelatedDoctor>
        </div>
      </div>
    )
  );
};

export default Appointments;
