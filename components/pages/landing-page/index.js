import React from "react";
import AboutSection from "./about-section";
import AltarCall from "./altar-call-section";
import Hero from "./hero";
import MerchSection from "./merch-section";
import ServantLeader from "./servant-leader";
import Welcome from "./welcome";
import header from "../../../public/assets/images/hero/property3.png";
function LandingPage({}) {
  return (
    <>
      <Hero header={header}/>
      <Welcome />
      <ServantLeader />
      <AboutSection />
      <MerchSection />
      <AltarCall />
    </>
  );
}

export default LandingPage;
