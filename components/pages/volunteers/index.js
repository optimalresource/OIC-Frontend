import React from "react";
import AvailablePositions from "./landing-page/available-positions";
import HeroSection from "./landing-page/hero-section";
import WhyServe from "./landing-page/why-serve";
function Volunteers({}) {
  return (
    <>
      <HeroSection />
      <WhyServe />
      <AvailablePositions />
    </>
  );
}

export default Volunteers;
