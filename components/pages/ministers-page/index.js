import React from "react";
import Hero from "../landing-page/hero";
import MinisteringSection from "./MinisteringSection";

function MinistersPage({}) {
  return (
    <>
      <Hero
        header="/assets/images/hero/squared/3.png"
        subtitle="Ministers Page"
      />
      <MinisteringSection />
    </>
  );
}

export default MinistersPage;
