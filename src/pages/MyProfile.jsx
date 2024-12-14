import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserDate] = useState({
    name: "Edward",
    image: assets.profile_pic,
    email: "mdarfinji45@gmail.com",
    phone: "+601123989642",
    address: {
      line1: "7th street",
      line2: "Circle ,London",
    },
    gender: "Male",
    don: "2000-01-20",
  });

  const [isEdit, setEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" srcset="" />
      {isEdit ? (
        <input
          type="text"
          onChange={(e) =>
            setUserDate((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p></p>
      )}
      <hr />
      <div>
        <p>Contact Information</p>
        <div>
          <p>Email id :</p>
          <p>{userData.email}</p>
          <p>Phone : </p>
          {isEdit ? (
            <input
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
