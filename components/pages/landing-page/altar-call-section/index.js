import Image from "next/image";
import React from "react";
import Link from "next/link";

const AltarCall = () => {
  return (
    <div className="flex items-start bmd:items-center justify-between bmd:flex-col gap-10 w-[100%] bg-[#F6FCFF] px-[5%] py-[100px] mt-[150px]">
      <div className="flex flex-col flex-1 gap-8 bmd:order-2 md:max-w-[500px]">
        <div className="w-[100%] flex gap-5 items-center">
          <hr className="w-[100px] max320:w-[50px] border-[2px] border-[#010101]" />
          <div className="uppercase">A New Begining</div>
        </div>

        <h2 className="text-3xl font-semibold">
          I need <span className="text-[#1f4477]">Jesus</span>
        </h2>

        <p className="">
          The Oasis International Conference, hosted by RCCG The Oasis; a youth expression of RCCG The Kings Court,
          began in 2014 out of a burning desire to see the body of Christ grow in grace and in the knowledge of God.
          We live in a time where the truth seems to be fading off among believers and people are now giving their
          strength to motivations sponsored by selfish ambitions and personal interests.
        </p>

        <div className="mt-[50px]">
          <Link href="/altar-call">
            <button className={`buttonPrimary text-sm w-[250px] max320:w-[200px]`}>
              I accept Jesus
            </button>
          </Link>
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
