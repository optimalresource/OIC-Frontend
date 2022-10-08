import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-[90%] mt-[150px] max640:mt-[100px] relative">
      <div className="w-[100%] relative my-5">
        <Image
          src="/assets/images/hero/property3.png"
          alt="hero image"
          layout="responsive"
          width={1308}
          height={640}
          className="order-last"
        />
        <div className="px-5 md:px-10 text-[#ffffff] absolute top-0 left-0 h-[100%] w-[100%] flex items-center justify-between max400:px-2">
          <div className="flex-1 pl-2 md:pl-7 lg:pl-12 pr-2 lg:pr-5 max400:pr-1 max400:pl-1 max320:px-0">
            <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold py-5 max400:py-1 max400:text-xs max400:font-normal max320:py-0">
              OIC 2022
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-20 max400:text-2xl max400:leading-10">
              Kairos
            </h1>
            <p className="text-sm md:text-base lg:text-lg amd:font-semibold py-5 w-[100%] max400:py-1 max400:text-xs max400:font-normal max320:py-0">
              Now is the appointed time
            </p>
          </div>
          <div className="flex-1 pr-2 md:pr-7 lg:pr-12 pl-2 lg:pl-5 flex flex-col items-end max400:pr-1 max400:pl-1 max320:px-0">
            <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold py-5 max400:py-1 max400:text-xs max400:font-normal">
              DAY 1
            </h3>
            <h2 className="font-semibold text-right text-xl md:text-2xl lg:text-4xl max400:text-sm">
              Monday, 21st November
            </h2>
            <p className="text-sm md:text-base lg:text-lg amd:font-semibold py-5 max400:py-1 max400:text-xs max400:font-normal">
              Time: 6:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
