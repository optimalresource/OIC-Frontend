import Link from "next/link";
import React from "react";

const VolunteerSuccessPage = () => {
  return (
    <div className="w-[90%] min1141:w-[80%] flex items-start justify-center flex-col">
      <div className="flex text-[50px] mt-[50px] text-[green] items-center">
        Thank you!
      </div>
      <p className="mt-5">
        Thank you for completing the Volunteer request form, we appreciate your
        interest.
      </p>
      <p className="my-5">Please check your email regularly for updates.</p>
      <Link href="/volunteer">
        <p className="mt-5 text-[#0b508f] cursor-pointer">
          Click here to register for someone else.
        </p>
      </Link>
    </div>
  );
};

export default VolunteerSuccessPage;
