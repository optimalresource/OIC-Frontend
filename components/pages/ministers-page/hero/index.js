import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-[90%] mt-[150px] max640:mt-[100px] relative">
      <div className="w-[100%] relative my-5">
        <Image
          src="/assets/images/hero/property1.png"
          alt="hero image"
          layout="responsive"
          width={1308}
          height={640}
          className="order-last"
        />
        <div className="px-5 md:px-10 text-[#ffffff] absolute top-0 left-0 h-[100%] w-[100%] flex items-center justify-between max400:px-2">
          <div className="flex-1 pl-2 md:pl-7 lg:pl-12 pr-2 lg:pr-5 max400:pr-1 max400:pl-1 max320:px-0 items-center">
            <div class="mb-30"> 
            <h5 className="text-sm text-center font-semibold lg:text-lg amd:font-semibold py-10 w-[100%] max400:py-1 max400:text-xs max400:font-normal max320:py-0">
              OIC 2022
            </h5>
            <div class="flex flex-col space-y-4"> 
              <h1 className="text-5xl text-center font-bold">
              Now is the
            </h1>
            <h1 className="text-5xl text-center font-bold">
            Acceptable Time
            </h1>
            </div>
            <p className="text-sm text-center font-semibold lg:text-lg amd:font-semibold py-5 w-[100%] max400:py-1 max400:text-xs max400:font-normal max320:py-0">
              Kairos Moment
            </p>
            </div>
            <div class="flex flex-col space-y-4 mt-16">
            <h5 className="text-sm text-center  w-[100%] max400:py-1 max400:font-normal max320:py-0">
              DAY 7
            </h5>
            <p className="text-sm text-center font-semibold lg:text-lg amd:font-semibold  w-[100%] max400:py-1 max400:text-xs max400:font-normal max320:py-0">
            Sunday 27th November
            </p>
            <h5 className="text-sm text-center w-[100%] max400:font-normal max320:py-0">
             Time: 1:00pm
            </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
