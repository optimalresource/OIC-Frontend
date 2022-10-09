import Image from "next/image";
import React from "react";

const ServantLeader = () => {
  return (
    <div className="flex items-center justify-between bmd:flex-col gap-10 w-[100%] min-h-[850px] bg-[#F6FCFF] px-[5%] py-[100px] mt-[150px]">
      <div className="flex flex-col flex-1 gap-8 bmd:order-2">
        <div className="w-[100%] flex gap-5 items-center">
          <hr className="w-[100px] max320:w-[50px] border-[2px] border-[#010101]" />
          <div className="uppercase">Call to Serve</div>
        </div>

        <h2 className="text-3xl font-semibold">
          Volunteer to be a{" "}
          <span className="text-[#1f4477]">Servant Leader</span>
        </h2>

        <p className="">
          If you are willing to serve throughout the entire conference, we
          invite you to submit your application to be a servant leader! You will
          receive an update on your application status after it has been
          processed. We appreciate your desire to serve this generation!
        </p>

        <div className="mt-[50px]">
          <button className={`buttonPrimary text-sm`}>
            Become a Servant Leader
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/assets/images/svgs/right-volunteer.svg"
          width={590}
          height={546}
          alt="logo"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default ServantLeader;
