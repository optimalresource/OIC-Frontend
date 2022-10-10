import Image from "next/image";
import React from "react";

const MerchSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] ">
      <Image
        src="/assets/images/merchant-section.png"
        alt="merch image"
        layout="responsive"
        width={1160}
        height={822}
      />
    </div>
  );
};

export default MerchSection;
