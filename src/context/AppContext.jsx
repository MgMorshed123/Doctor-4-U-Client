import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";

  const values = {
    doctors,
    currencySymbol,
  };

  console.log(values);

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
