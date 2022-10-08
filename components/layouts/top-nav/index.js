import { Icon } from "@iconify/react";
import React from "react";

const TopNav = () => {
  return (
    <div className="fixed flex px-[5%] py-[10px] top-0 h-[50px] justify-between items-center w-[100%] text-[#1f4477] z-10 bg-[#ffffff] max-w-[1900px] max640:hidden">
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
