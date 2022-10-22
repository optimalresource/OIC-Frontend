import React from "react";

const Subscription = () => {
  return (
    <div className="w-[100%] h-[309px] bg-[url('/assets/images/subscription.png')] text-[#ffffff] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-4xl font-semibold">Subscribe</h1>
      <p className="px-5 text-center">Keep up to date with RCCG The Oasis.</p>
      <div className="flex items-center justify-center relative max400:flex-col max400:gap-5">
        <div className="shadow-[inset_0px_0px_1px_1px_#4A4A4A] h-[40px] w-[200px] amd:w-[300px] px-3 max320:max-w-[200px] rounded-[5px] border-r-0">
          <input
            type="text"
            className="h-[40px] bg-[transparent] border-0 outline-none w-[100%] rounded-0"
          />
        </div>
        <button className="buttonPrimary no-radius ml-[-3px] max400:ml-[unset] no-hover">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
