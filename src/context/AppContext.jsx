import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      console.log(data);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        Swal.fire({
          title: data.message,
          // text: "You clicked the button!",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        // text: "You clicked the button!",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  const values = {
    doctors,
    token,
    setToken,
    currencySymbol,
    backendUrl,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
