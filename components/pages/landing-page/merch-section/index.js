import Image from "next/image";
import React from "react";

const MerchSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] amd:h-[628px] relative">
      <div className="w-[100%] h-[628px] bmd:hidden">
        <Image
          src="/assets/images/merchant-section.png"
          alt="merch image"
          layout="intrinsic"
          width={1096}
          height={628}
        />
      </div>
      <div className="px-5 md:px-10 bmd:relative bmd:rounded-2xl amd:absolute top-0 left-0 amd:h-[100%] w-[100%] flex flex-col gap-5 items-center justify-center max400:px-2 bmd:bg-[#f6fcfe] bmd:py-[100px]">
        <h2 className="text-3xl font-semibold text-center amd:mt-[-200px] min1041:mt-[unset]">
          Purchase Conference <br />
          <span className="text-[#1f4477]">Merchandise</span>
        </h2>
        <p className="text-base text-gray-700 text-center max-w-[400px]">
          Join us in making conference as colourful as possible and in spreading
          the message of Christ!
        </p>
        <div className="mt-[50px] amd:mt-[20px] min1041:mt-[50px]">
          <button className={`buttonPrimary text-sm w-[200px]`}>Get Now</button>
        </div>
      </div>
    </div>
  );
};

export default MerchSection;
