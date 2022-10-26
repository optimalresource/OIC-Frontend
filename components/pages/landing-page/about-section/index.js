import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="flex items-start bmd:items-center justify-between bmd:flex-col gap-10 w-[100%] bg-[#ffffff] px-[5%] py-[150px]">
      <div className="flex-1 text-left bmd:text-center mt-[-80px]">
        <Image
          src="/assets/images/about-us.png"
          width={609}
          height={659}
          alt="logo"
          layout="intrinsic"
        />
      </div>

      <div className="flex flex-col flex-1 gap-8 md:max-w-[500px]">
        <div className="w-[100%] flex gap-5 items-center">
          <hr className="w-[100px] max320:w-[50px] border-[2px] border-[#010101]" />
          <div className="uppercase">Oasis International Conference</div>
        </div>

        <h2 className="text-3xl font-semibold text-[#1f4477]">About Us</h2>

        <p className="lineheight-[2xl]">
          The Oasis International Conference, hosted by RCCG The Oasis; a youth
          expression of RCCG The Kings Court, began in 2014 out of a burning
          desire to see the body of Christ grow in grace and in the knowledge of
          God. We live in a time where the truth seems to be fading off among
          believers and people are now giving their strength to motivations
          sponsored by selfish ambitions and personal interests.
        </p>

        <div className="mt-[50px]">
          <Link href="/about">
            <button className={`buttonPrimary text-sm w-[200px]`}>
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
