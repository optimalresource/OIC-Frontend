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
      <div className="grid grid-cols-3 gap-6 mt-20 mb-20">
        <div>
          <img src="/assets/images/Ministers/Card_1.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_2.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_2.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_4.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_5.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_6.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_7.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_8.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_8.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_8.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_10.png" alt="minister" />
        </div>
        <div>
          <img src="/assets/images/Ministers/Card_11.png" alt="minister" />
        </div>
      </div>
    </div>
  );
};
export default MinistersSection;
