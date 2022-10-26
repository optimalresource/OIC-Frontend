import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="flex items-start bmd:items-center justify-between bmd:flex-col gap-10 w-[100%] bg-[#ffffff] px-[5%] py-[150px]">
      <div className="flex-1 text-left bmd:text-center">
        <Image
          src="/assets/images/about-us.png"
          width={609}
          height={659}
          alt="logo"
          layout="intrinsic"
        />
      </div>

      <div className="flex flex-col flex-1 gap-8 md:max-w-[500px]">
        <div className="w-[100%] flex gap-5 items-center">
          <hr className="w-[100px] max320:w-[50px] border-[2px] border-[#010101]" />
          <div className="uppercase">Oasis International Conference</div>
        </div>

        <h2 className="text-3xl font-semibold text-[#1f4477]">About Us</h2>

        <p className="lineheight-[2xl]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.amet, consectetur
          dolor sit amet, consectetur adipiscing elit.consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.amet,
          consectetur Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.amet, consectetur dolor sit amet, consectetur adipiscing
          elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.amet, consectetur
        </p>

        <div className="mt-[50px]">
          <Link href="/about">
            <button className={`buttonPrimary text-sm w-[200px]`}>
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
