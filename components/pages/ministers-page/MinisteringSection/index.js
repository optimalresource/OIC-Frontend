import Image from "next/image";
import React from "react";

const MinistersSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl mt-8 mb-8 text-center font-semibold text-[#1f4477]">
          Ministering at OIC 2022
        </h1>
        <p className="text-center">
          This year, Oasis International Conference is proud to welcome our
          <br></br>
          guest ministers and our home pastors, men and women of valour
          handpicked by God to pour into us.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-14">
        <div className="box-content h-70 w-45 p-4 border border-solid border-slate-200 bg-white m4 flex rounded-md">
          <div className="object-cover h-20 w-65">
            <img src="/assets/images/Ministers/Pastor_Ben.png" />
          </div>
        </div>
        <div className="box-content h-70 w-45 p-4 border border-slate-200 border-solid bg-white-500 m4 flex rounded-md">
          <img src="/assets/images/Ministers/Pastor_Ben.png" />
        </div>
        <div className="box-content h-70 w-45 p-4 border border-slate-200 border-solid bg-white-500 m4 flex rounded-md">
          <img src="/assets/images/Ministers/Pastor_Ben.png" />
        </div>
        <div className="box-content h-70 w-45 p-4 border border-slate-200 border-solid border-slate-200 bg-white-500 m4 flex rounded-md">
          <img src="/assets/images/Ministers/Pastor_Ben.png" />
        </div>
        <div className="box-content h-70 w-45 p-4 border border-solid border-slate-200 bg-white-500 m4 flex rounded-md">
          <img src="/assets/images/Ministers/Pastor_Ben.png" />
        </div>
        <div className="box-content h-70 w-45 p-4 border border-solid border-slate-200 bg-white-500 m4 flex rounded-md ">
          <div className="h-50 w-35">
            <img src="/assets/images/Ministers/Pastor_Ben.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MinistersSection;
