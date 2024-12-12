import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [docInfo, setDocInfo] = useState(null);
  const [slotTime, setSlotTime] = useState("");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Reset the slots

    let today = new Date(); // Get the current date
    let allSlots = []; // To store the time slots for the next 7 days

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); // Move to the next day

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End time for the current day (9 PM)

      // Setting initial time for the current day
      currentDate.setHours(10, 0, 0, 0); // Start time for the slots (10 AM)

      let timeSlots = [];

      // Generate 30-minute slots for the current day
      while (currentDate < endTime) {
        let formattedDate = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedDate,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment time by 30 minutes
      }

      // Add the slots for the current day into the allSlots array
      allSlots.push({
        date: currentDate,
        slots: timeSlots,
      });
    }

    // Set the timeSlots with all the generated slots for the next 7 days
    setDocSlots(allSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rouded-lg"
              src={docInfo.image}
              alt=""
              srcset=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px]  sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium">
              {docInfo.name}{" "}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt=""
                srcset=""
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
            {/*  Doc tor About
             */}

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" srcset="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium  mt-4 ">
              Appointment Fee :{" "}
              <span className="text-gray-600">
                {currencySymbol} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* booking slots  */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots </p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((daySlot, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border-gray-200"
                  } `}
                  key={index}
                >
                  <p>{daysOfWeek[daySlot.date.getDay()]}</p>{" "}
                  {/* Display day of the week */}
                  <p>
                    {daySlot.date.toLocaleDateString([], { day: "2-digit" })}
                  </p>
                  {/* Display date in format MM/DD/YYYY */}
                  {/* {daySlot.slots.map((slot, slotIndex) => (
                      <div key={slotIndex}>
                        <p>{slot.time}</p>
                      </div>
                    ))} */}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Appointments;
