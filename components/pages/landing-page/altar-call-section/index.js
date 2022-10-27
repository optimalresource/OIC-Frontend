import Image from "next/image";
import React from "react";

const AltarCall = () => {
  return (
    <div className="flex items-start bmd:items-center justify-between bmd:flex-col gap-10 w-[100%] bg-[#F6FCFF] px-[5%] py-[100px] mt-[150px]">
      <div className="flex flex-col flex-1 gap-8 bmd:order-2 md:max-w-[500px]">
        <div className="w-[100%] flex gap-5 items-center">
          <hr className="w-[100px] max320:w-[50px] border-[2px] border-[#010101]" />
          <div className="uppercase">A New Begining</div>
        </div>

        <h2 className="text-3xl font-semibold">
          Who is <span className="text-[#1f4477]">Jesus</span>
        </h2>

        <p className="">
          Jesus told him, &quot;I am the way, the truth, and the life. No one
          can come to the Father except through me.&quot; John 14:6 (NLT).
        </p>

        <div className="mt-[50px]">
          <button
            className={`buttonPrimary text-sm w-[250px] max320:w-[200px]`}
          >
            I accept Jesus
          </button>
        </div>
      </div>
      <div className="flex-1 text-right">
        <Image
          src="/assets/images/altar-call.png"
          width={391}
          height={391}
          alt="logo"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default AltarCall;
