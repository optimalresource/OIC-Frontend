import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const AboutComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] mt-[150px] max640:mt-[100px] relative">
      <div className="top-section flex justify-between gap-10 items-start w-[90%] bmd:flex-col">
        <div className="flex gap-10 flex-1 min-w-[60%]">
          <div className="social flex flex-col text-[#1f4477] text-[24px] gap-10 pt-[125px]">
            <Icon icon="akar-icons:instagram-fill" />
            <Icon icon="akar-icons:youtube-fill" />
            <Icon icon="akar-icons:facebook-fill" />
            <Icon icon="akar-icons:twitter-fill" />
          </div>
          <div className="flex flex-col flex-1 max-w-[633px]">
            <h3 className="text-2xl font-semibold text-[#1f4477] mb-7 max1140:text-[24px] max400:text-[18px] max400:leading-7 max400:mb-3 max1140:mb-5">
              WELCOME TO
            </h3>
            <h1 className="text-[44px] font-bold text-[#1f4477] mb-7 max1140:text-[30px] max400:text-[22px]">
              YOUR ACCEPTABLE TIME
            </h1>
            <Image
              src="/assets/images/about.png"
              layout="intrinsic"
              width={633}
              height={295}
              alt="about"
            />
            <h3 className="text-2xl font-semibold text-[#1f4477] mt-7">
              About the OASIS International Conference
            </h3>
            <p className="text-base mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.consectetur Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-semibold text-[#1f4477] mb-5">
            Seven Pillars of the Oasis
          </h2>
          <ul className="flex flex-col gap-5 uppercase">
            {pillars.map((pillar, index) => {
              return (
                <li key={index} className="flex gap-3">
                  <span>{index + 1}.</span> <span>{pillar}.</span>
                </li>
              );
            })}
            <li></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-[100%] bg-[#000] text-white gap-10 py-[100px] px-[5%] mt-[150px] items-center justify-center text-center">
        <h2 className="text-3xl font-semibold">A brief history of the OIC</h2>
        <Image
          src="/assets/images/gallery.png"
          layout="intrinsic"
          width={1291}
          height={402}
          alt="gallery"
        />
      </div>
      <div className="flex flex-col w-[90%] my-[150px]">
        <p className="text-[100px] font-bold font-serif leading-10 ">&#8220;</p>
        <p className="px-[50px] mt-2 leading-7 max400:px-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.amet, consectetur
          dolor sit amet, consectetur adipiscing ur consectetur dolor sit amet,
          consectetur adipiscing ur consectetur dolor sit amet, consectetur
          adipiscing ur Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit.
        </p>
        <p className="px-[50px] mt-5 leading-7 max400:px-[20px]">
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.amet,
          consectetur dolor sit amet, consectetur adipiscing ur consectetur
          dolor sit amet, consectetur adipiscing ur consectetur dolor sit amet,
          consectetur adipiscing ur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.amet, consectetur dolor sit amet,
          consectetur adipiscing ur consectetur dolor sit amet, consectetur
          adipiscing ur consectetur dolor sit amet, consectetur adipiscing ur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.consectetur adipiscing elit.
        </p>
        <p className="px-[50px] mt-5 leading-7 max400:px-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.amet,
          consectetur dolor sit amet, consectetur adipiscing ur consectetur
          dolor sit amet, consectetur adipiscing ur consectetur dolor sit amet,
          consectetur adipiscing ur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.amet, consectetur dolor sit amet,
          consectetur adipiscing ur consectetur dolor sit amet, consectetur
          adipiscing ur consectetur dolor sit amet, consectetur adipiscing ur
        </p>
      </div>
    </div>
  );
};

export const pillars = [
  "Prayer",
  "The word",
  "Holiness",
  "Purity and Character",
  "True, Spirited and Exuberant Worship",
  "Order and Excellence within the context of the liberty of the Holy Spirit",
  "A buring passion for the lost",
  "The great commission",
  "LOVE, FRIENDSHIP, FAMILY AND COMMUNITY",
];

export default AboutComponent;
