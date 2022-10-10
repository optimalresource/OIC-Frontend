import React from "react";
import AboutSection from "./about-section";
import Hero from "./hero";
import MerchSection from "./merch-section";
import ServantLeader from "./servant-leader";
import Welcome from "./welcome";
function LandingPage({}) {
  return (
    <>
      <Hero />
      <Welcome />
      <ServantLeader />
      <AboutSection />
      <MerchSection />
    </>
  );
}

export default LandingPage;
