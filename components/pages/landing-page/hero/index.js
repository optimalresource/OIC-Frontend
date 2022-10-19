import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = ({ header }) => {
  const heroBgClass =
    "w-[100%] relative my-5 bg-[url('/assets/images/hero/squared/1.png')] bg-cover md:rounded-[50px]";
  return (
    <div className="flex justify-center items-center w-[90%] bmd:w-[100%] mt-[150px] max640:mt-[100px] relative">
      <div className={heroBgClass}>
        <div className="px-5 md:px-10 text-[#fff] top-0 left-0 h-[100%] w-[100%] flex flex-col items-center justify-center max400:px-2">
          <div className="flex-1 pl-2 md:pl-7 lg:pl-12 pr-2 lg:pr-5 max400:pr-1 max400:pl-1 max320:px-0 text-center py-10 pt-20">
            <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold pt-2 max400:py-1 max400:text-xs max400:font-normal max320:py-0">
              OIC 2022
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-20 max400:text-2xl max400:leading-10">
              Now is the appointed time
            </h1>
            {/* <p className="text-base md:text-base lg:text-lg amd:font-semibold py-5 w-[100%] max400:py-1 max400:text-base max400:font-normal">
              Kairos Moment
            </p> */}
          </div>
          <div className="flex flex-col items-center bg-[#000] bg-opacity-60 p-5 mb-10 md:mt-10 bmd:mt-5 md:min-w-[500px] bmd:min-w-[300px] max320:min-w-[200px]">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
