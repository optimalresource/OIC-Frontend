import React from "react";
import Hero from "../landing-page/hero";
import ServantLeader from "../landing-page/servant-leader";
import Welcome from "./welcome";
import header from "../../../public/assets/images/hero/register_header.png";
function RegisterPage({}) {
  return (
    <>
      <Hero header={header}/>
      <Welcome />
      <ServantLeader />
    </>
  );
}

export default RegisterPage;
