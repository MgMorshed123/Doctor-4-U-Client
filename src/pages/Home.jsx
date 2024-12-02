import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctor from "../components/TopDoctor";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <SpecialityMenu></SpecialityMenu>
      <TopDoctor></TopDoctor>
    </div>
  );
};

export default Home;
