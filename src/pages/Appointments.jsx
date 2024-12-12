import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

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
              {docInfo.name} <img src={assets.verified_icon} alt="" srcset="" />
            </p>
            <div>
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>
            {/*  Doc tor About
             */}

            <div>
              <p>
                About <img src={assets.info_icon} alt="" srcset="" />
              </p>
              <p>{docInfo.about}</p>
            </div>
            <div></div>
          </div>
        </div>

        <div></div>
      </div>
    )
  );
};

export default Appointments;
