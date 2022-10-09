import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-2 max1040:w-[90%] w-[750px] max1040:mt-[100px] mt-[150px] shadow-[0_26px_44px_rgba(189,189,189,0.25)] rounded-[30px] p-10 mx-[auto]">
      <h1 className="uppercase text-4xl text-center font-semibold text-[#1f4477]">
        Welcome
      </h1>
      <p className="py-4">Hi there!</p>
      <p className="py-1">
        Welcome to the Oasis International Conference 2022. It is another year
        yet again and we can&lsquo;t wait to take you to a higher level of
        deepened faith and love in Christ Jesus. The theme for this year is
        &lsquo;Kairos: Now is the appointed time.
      </p>
      <p className="py-1">
        This is set to open your minds to understanding God&lsquo;s time. There
        will be various guest ministers and anointed men of God equipping us to
        carry on God&lsquo;s mandate for His kingdom. There will also be
        impartation, healing, deliverance and many more.
      </p>
      <p className="py-1">
        So join us to experience heaven on earth, as we allow God to do His work
        in us and have the best time together!
      </p>
      <p className="text-right">
        Love,
        <br />
        The OIC Team.
      </p>
    </div>
  );
};

export default Welcome;
