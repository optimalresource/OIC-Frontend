import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="fixed flex  py-[10px] top-0 h-[50px] justify-between items-center text-[#fff] z-[200]  px-[5%] w-[100%] max640:hidden min1728:px-[95px] bg-[#0b508f]">
      <div className="flex items-center gap-5">
        {/* <div className="flex gap-2 items-center">
          <Icon icon="akar-icons:phone" />
          <span>+234 915 782 2911</span>
        </div> */}
        RCCG, The Oasis
        {/* <div className="flex gap-2 items-center">
          <Icon icon="uiw:mail-o" />
          <span>info@theoasislagos.com</span>
        </div> */}
      </div>

      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          Follow :
          <Link href="https://www.instagram.com/theoasislagos/">
            <a className="text-[#fff]"><Icon icon="akar-icons:instagram-fill" /></a>
          </Link>
          <Link href="https://www.youtube.com/c/TheOasisLagos">
            <a className="text-[#fff]"><Icon icon="akar-icons:youtube-fill" /></a>
          </Link>
          <Link href="https://www.facebook.com/theoasislagos">
            <a className="text-[#fff]"><Icon icon="akar-icons:facebook-fill" /></a>
          </Link>
          <Link href="https://twitter.com/theoasislagos">
            <a className="text-[#fff]"><Icon icon="akar-icons:twitter-fill" /></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
