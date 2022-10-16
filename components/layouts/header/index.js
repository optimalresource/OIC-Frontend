import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Icon, InlineIcon } from "@iconify/react";
import { motion, useTransform, useScroll } from "framer-motion";
import ClickAwayListener from "components/utils/ClickAwayListener";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "components/utils/Responsive";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export function Header() {
  const [menuToggled, setMenuToggled] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1040px)" });
  const [confDropDown, setConfDropDown] = useState(false);
  const [oasisDropdown, setOasisDropDown] = useState(false);

  return (
    <>
      <div
        className={`${styles.container} top-[50px] py-[20px] min641:pt-[10px] max640:top-[0] w-[90%] max-w-[1555px] max1555:px-[5%] max1555:w-[100%] min1728:px-[0] z-[1000]`}
      >
        <Image
          src="/assets/images/svgs/logo3.svg"
          width={161}
          height={45}
          alt="logo"
          layout="intrinsic"
        />
        <div className={styles.menus}>
          <ul className="text-sm flex gap-[50px] max1040:gap-[30px] items-center font-bold">
            <li
              onMouseEnter={() => setConfDropDown(true)}
              onMouseLeave={() => setConfDropDown(false)}
              className="flex flex-col"
            >
              <span className="flex items-center gap-2">
                Conference <Icon icon="akar-icons:chevron-down" />
              </span>
              {confDropDown && (
                <div className="fixed min-w-[140px] pt-[24px]">
                  <ul className="fixed flex flex-col gap-1 font-semibold shadow-sm shadow-[#0b508f] rounded-lg py-4 bg-[#ffffff] min-w-[140px]">
                    <motion.li
                      initial={{ background: "#ffffff", color: "#000000" }}
                      whileHover={{ background: "#0b508f", color: "#ffffff" }}
                      className="px-3 py-1"
                    >
                      About
                    </motion.li>
                    <motion.li
                      initial={{ background: "#ffffff", color: "#000000" }}
                      whileHover={{ background: "#0b508f", color: "#ffffff" }}
                      className="px-3 py-1"
                    >
                      Ministers
                    </motion.li>
                    <motion.li
                      initial={{ background: "#ffffff", color: "#000000" }}
                      whileHover={{ background: "#0b508f", color: "#ffffff" }}
                      className="px-3 py-1"
                    >
                      FAQ
                    </motion.li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setOasisDropDown(true)}
              onMouseLeave={() => setOasisDropDown(false)}
              className="flex flex-col"
            >
              <span className="flex items-center gap-2">
                Oasis Online <Icon icon="akar-icons:chevron-down" />
              </span>
              {oasisDropdown && (
                <div className="fixed min-w-[140px] pt-[24px]">
                  <ul className="fixed flex flex-col gap-1 font-semibold shadow-sm shadow-[#0b508f] rounded-lg py-4 bg-[#ffffff] min-w-[140px]">
                    <motion.li
                      initial={{ background: "#ffffff", color: "#000000" }}
                      whileHover={{ background: "#0b508f", color: "#ffffff" }}
                      className="px-3 py-1"
                    >
                      Stream
                    </motion.li>
                    <motion.li
                      initial={{ background: "#ffffff", color: "#000000" }}
                      whileHover={{ background: "#0b508f", color: "#ffffff" }}
                      className="px-3 py-1"
                    >
                      Give
                    </motion.li>
                    <motion.li
                      initial={{ background: "#ffffff", color: "#000000" }}
                      whileHover={{ background: "#0b508f", color: "#ffffff" }}
                      className="px-3 py-1"
                    >
                      Altar Call
                    </motion.li>
                  </ul>
                </div>
              )}
            </li>
            <li>Store</li>
            <li>Volunteer</li>
          </ul>
        </div>
        {!isMobile && (
          <div className="buttonWrapper max1200:hidden">
            <button className={`buttonPrimary text-sm`}>Login</button>
            {/* <button className={`buttonTransparent text-sm`}>Login</button> */}
          </div>
        )}
        <motion.div
          className={`${styles.menuIcon} flex justify-end items-center text-[24px] w-[100px] text-right min1201:hidden`}
          onClick={() => setMenuToggled((previous) => !previous)}
          animate={menuToggled ? "closed" : "open"}
          variants={variants}
        >
          <Icon icon="ant-design:menu-outlined" />
        </motion.div>
      </div>
      {menuToggled && isMobile && (
        <motion.div
          animate={menuToggled ? "open" : "closed"}
          variants={variants}
        >
          <MobileMenu
            menuToggled={menuToggled}
            setMenuToggled={setMenuToggled}
          />
        </motion.div>
      )}
    </>
  );
}

export default Header;
