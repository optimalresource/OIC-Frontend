import React from "react";
import AboutSection from "./about-section";
import AltarCall from "./altar-call-section";
import Hero from "./hero";
import MerchSection from "./merch-section";
import MinisteringSection from "./ministering-section";
import ServantLeader from "./servant-leader";
import Welcome from "./welcome";
function LandingPage({}) {
  const header = "/assets/images/hero/squared/1.png";
  return (
    <>
      <Hero header={header} />
      <Welcome />
      <ServantLeader />
      <AboutSection />
      <MerchSection />
      <AltarCall />
      <MinisteringSection />
    </>
  );
}

export default LandingPage;
