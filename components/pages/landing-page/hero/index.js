import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = ({
  header = "/assets/images/hero/squared/1.png",
  subtitle = "",
}) => {
  return (
    <div className="flex justify-center items-center w-[90%] bmd:w-[100%] mt-[130px] bmd:mt-[100px] max640:mt-[60px] relative">
      <div
        style={{
          background: "url('" + header + "')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-[100%]  my-5 mt-0 bg-no-repeat md:rounded-[50px] bg-[red]"
      >
        <div className="px-5 md:px-10 text-[#fff] top-0 left-0 h-[100%] w-[100%] flex flex-col items-center justify-center max400:px-2">
          <div className="flex-1 pl-2 md:pl-7 lg:pl-12 pr-2 lg:pr-5 max400:pr-1 max400:pl-1 max320:px-0 text-center py-10 pt-20">
            <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold pt-2 max400:py-1 max400:text-xs max400:font-normal max320:py-0">
              OIC 2022
            </h3>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold max400:text-3xl max400:leading-10 leading-[80px] cinzel-font mt-4">
              Now is the acceptable time
            </h1>
          </div>
          {subtitle.length === 0 ? (
            <div className="flex flex-col items-center bg-[#000] bg-opacity-60 p-5 mb-[80px] md:mt-10 bmd:mt-5 md:min-w-[500px] bmd:min-w-[300px] max320:min-w-[200px]">
              <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold py-5 max400:py-1 max400:text-xs max400:font-normal">
                DAY 1
              </h3>
              <h2 className="font-semibold text-center text-base md:text-xl lg:text-2xl">
                Monday, 21st November
              </h2>
              <p className="text-sm md:text-base lg:text-lg amd:font-semibold py-3 max400:font-normal">
                Time: 6:00pm
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center bg-[#000] bg-opacity-60 p-5 mb-[80px] md:mt-10 bmd:mt-5 md:min-w-[500px] bmd:min-w-[300px] max320:min-w-[200px]">
              <h2 className="font-semibold text-center text-base md:text-xl lg:text-2xl">
                {subtitle}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
