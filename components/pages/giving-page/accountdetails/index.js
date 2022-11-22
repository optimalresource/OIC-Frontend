import React from "react";

const AccountDetails = () => {
  return (
    <div className="w-[90%] bmd:w-[100%] bmd:px-5 flex flex-col items-center justify-center mt-16 mb-20">
    <div className="border-solid rounded-md border-2 border-[#0B508F]">
      <div className="py-8">
      <h5 className="text-2xl text-center font-semibold text-[#0B508F] py-6">
      Naira
      </h5>
      <span className="gap-16 inline-flex items-baseline text-[#0B508F] py-6 px-8">
      <span>Keystone Bank</span><span>Rccg The Oasis:  1006701524 </span><span><img src="/assets/images/giving/copy_vector_image.png" /></span>
  </span>
      </div>
    </div>
  </div>
  );
};

export default AccountDetails;
