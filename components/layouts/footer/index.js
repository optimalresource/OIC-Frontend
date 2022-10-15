import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="flex w-[100%] justify-between text-white bmd:flex-col bmd:justify-center bmd:gap-5">
        <div className="flex flex-col gap-3 bmd:text-center">
          <h2>RCCG THE OASIS</h2>
          <p>A house of refreshing for those hungry for God.</p>
          <div className="flex justify-start items-center gap-2 bmd:justify-center">
            <Icon icon="akar-icons:phone" />
            <span>+234 803 000 0000</span>
          </div>
          <div className="flex justify-start items-center gap-2 bmd:justify-center">
            <Icon icon="ant-design:mail-outlined" />
            <span>hello@theoasis.com</span>
          </div>
        </div>
        <div className="flex text-right w-[540px] max1040:w-[320px] bmd:w-[unset] justify-end items-center bmd:text-center bmd:justify-center">
          <Image
            src="/assets/images/oic.png"
            alt="oic"
            width={400}
            height={216}
            layout="intrinsic"
            className="opacity-30"
          />
          <div className="w-[250px] flex flex-col ml-[-250px] bmd:ml-[unset] bmd:absolute">
            <h3 className="text-lg font-bold">Address</h3>
            <p>3 Keystone Bank Cres, Victoria Island 106104, Lagos</p>
          </div>
        </div>
      </div>

      <hr className="w-[100%] bg-white" />

      <div className="flex justify-between w-[100%] items-center text-white max400:flex-col max400:gap-5">
        <p>&copy; 2022 OIC, All rights reserved.</p>
        <div className="flex gap-4">
          <Icon icon="akar-icons:instagram-fill" />
          <Icon icon="akar-icons:youtube-fill" />
          <Icon icon="akar-icons:facebook-fill" />
          <Icon icon="akar-icons:twitter-fill" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
