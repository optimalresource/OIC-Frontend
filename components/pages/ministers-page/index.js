import React from "react";
import MinisteringSection from "./MinisteringSection";

function MinistersPage({}) {
  return (
    <>
      <div className="w-[100%] px-[5%] mt-[130px] bmd:mt-[100px] max640:mt-[60px] relative bmd:bg-[#000]">
        <div className="w-[100%] min1140:h-[640px] relative rounded-[50px]">
          <img
            src="/assets/images/hero/ministers-page.png"
            alt="banner"
            layout="fill"
            className="rounded-[50px] w-[100%]"
            width="100%"
          />
        </div>
      </div>
      <MinisteringSection />
    </>
  );
}

export default MinistersPage;
