import { Icon } from "@iconify/react";
import React from "react";

const TopNav = () => {
  return (
    <div className="fixed flex  py-[10px] top-0 h-[50px] justify-between items-center text-[#fff] z-[200] max-w-[1728px] px-[5%] w-[100%] max640:hidden min1728:px-[95px] bg-[#000]">
      <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center">
          <Icon icon="akar-icons:phone" />
          <span>+234 915 782 2911</span>
        </div>
        <div className="flex gap-2 items-center">
          <Icon icon="uiw:mail-o" />
          <span>info@theoasislagos.com</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          Follow :
          <Icon icon="akar-icons:instagram-fill" />
          <Icon icon="akar-icons:youtube-fill" />
          <Icon icon="akar-icons:facebook-fill" />
          <Icon icon="akar-icons:twitter-fill" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
