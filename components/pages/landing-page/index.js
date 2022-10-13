import React from "react";
import Hero from "./hero";
import ServantLeader from "./servant-leader";
import Welcome from "./welcome";
import header from "../../../public/assets/images/hero/property3.png";
function Volunteers({}) {
  return (
    <>
      <Hero header={header}/>
      <Welcome />
      <ServantLeader />
    </>
  );
}

export default Volunteers;
