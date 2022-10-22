/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Form from "./form";
import Welcome from "./welcome";
function AltarCallComponent({}) {
  return (
    <>
      <div className="w-[100%] px-[5%] mt-[150px] bmd:mt-[120px] max640:mt-[80px] relative bmd:bg-[#000]">
        <div className="w-[100%] min1140:h-[640px] relative rounded-[50px]">
          <img
            src="/assets/images/hero/squared/8.png"
            alt="banner"
            layout="fill"
            className="rounded-[50px] w-[100%]"
            width="100%"
          />
        </div>
      </div>
      <Welcome />
      <Form />
    </>
  );
}

export default AltarCallComponent;
