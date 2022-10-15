import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const MinisteringSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-[880px] max1040:w-[90%] px-[5%] py-[50px] mt-[100px] mb-[50px]">
      <h2 className="text-3xl font-semibold text-center min1041:mt-[unset]">
        Ministering at
        <span className="text-[#1f4477]"> OIC 2022</span>
      </h2>

      <div className="flex flex-col items-center justify-center w-[100%] amd:h-[458px] relative">
        <div className="h-[458px] bmd:min-h-[458px] bmd:h-[unset] w-[90%] shadow-xl bg-[#ffffff] flex flex-col items-center justify-center gap-5 p-5 bmd:px-2 bmd:w-[95%] rounded-xl z-[100] relative">
          <Image
            src="/assets/images/ministers/thumbnails/1.png"
            width={109}
            height={108}
            layout="intrinsic"
            alt="minister"
          />
          <h2 className="text-2xl text-center">Bishop Wale Oke</h2>
          <p className="text-center px-5">
            Bishop Francis Wale Oke is the President and founder of The Sword of
            The Spirit Ministries International with the Headquarters located in
            Ibadan City, Oyo State, Nigeria.
          </p>
        </div>
        <div className="h-[458px] w-[80%] shadow-xl bg-[#ffffff] flex flex-col items-center justify-center gap-5 p-5 bmd:p-2 bmd:w-[85%] rounded-xl mt-[-400px] bmd:mt-[-430px] z-[99] relative"></div>

        <div className="h-[458px] w-[70%] shadow-xl bg-[#ffffff] flex flex-col items-center justify-center gap-5 p-5 bmd:p-2 bmd:w-[75%] rounded-xl mt-[-400px] bmd:mt-[-430px] z-[98] relative"></div>
      </div>
      <div className="p-3 flex gap-6">
        <button className="p-4 rounded-[5px]">
          <Icon icon="akar-icons:arrow-left" />
        </button>
        <button className="p-4 rounded-[5px]">
          <Icon icon="akar-icons:arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default MinisteringSection;
