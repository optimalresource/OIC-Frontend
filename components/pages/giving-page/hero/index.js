import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({
  header = "/assets/images/giving/giving_hero_image.png",
  subtitle = "",
}) => {
  return (
    <div className="flex justify-center mt-[130px] bmd:mt-[100px] relative">
      <div
        style={{
          background: "url('" + header + "')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-[100%] my-5 mt-0 bg-no-repeat bg-[red]"
      >
        <div className="px-5 md:px-10 text-[#fff] top-0 left-0 h-[100%] w-[100%] flex flex-col items-center justify-center max400:px-2">
          <div className="flex-1 pl-2 md:pl-7 lg:pl-12 pr-2 lg:pr-5 max400:pr-1 max400:pl-1 max320:px-0 text-center py-10 pt-20">
            <h2 className="text-4xl md:text-6xl lg:text-8xl text-black font-bold max400:text-3xl max400:leading-10 leading-[80px] inter-font mt-4">
            Generosity is our honour
            </h2>
          </div>
            <div className="flex flex-col items-center p-5 mb-[80px] md:mt-10 bmd:mt-5 md:min-w-[500px] bmd:min-w-[300px] max320:min-w-[200px]">
              <p className="text-black text-center text-base md:text-xl lg:text-2xl inter-font">
              Because <span class="inline-flex items-baseline"><img src="/assets/images/giving/Jesus.png" class="self-center w-25 h-20" /></span>  was first generous towards us. See what God can do <br/> through your generosity.
              </p>
              <p className="text-black text-center text-base md:text-xl py-8 lg:text-2xl inter-font">
              Simple and secure. Give your offerings from anywhere in the world.
              </p>
              <Link href="/volunteer" className="flex text-[#fff] py-16 mt-8">
            <button className={`buttonPrimary text-sm md:w-64`}>
              Give Now
            </button>
          </Link>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Hero;
