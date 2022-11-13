import React from "react";
import Hero from "./hero";
import OtherGiving from "./othergiving";
import AccountDetails from "./accountdetails";
function GivingPage({}) {
  const header = "/assets/images/giving/giving_hero_image.png";
  return (
    <>
      <Hero header={header} />
      <OtherGiving />
      <AccountDetails />
    </>
  );
}

export default GivingPage;
