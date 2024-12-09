import React from "react";
import { useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams;
  console.log(speciality);

  const { doctors } = useContext(AppContext);

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
    </div>
  );
};

export default Doctors;
