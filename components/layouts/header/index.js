import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { motion, useTransform, useScroll } from "framer-motion";
import ClickAwayListener from "components/utils/ClickAwayListener";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "components/utils/Responsive";
import MobileMenu from "./MobileMenu";
import Link from 'next/link';
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export function Header() {
  const [menuToggled, setMenuToggled] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1040px)" });

  return (
    <>
      <div
        className={`${styles.container} top-[50px] py-[20px] min641:pt-[10px] max640:top-[0] w-[90%] max-w-[1555px] max1555:px-[5%] max1555:w-[100%] min1728:px-[0]`}
      >
        <Image
          src="/assets/images/svgs/logo3.svg"
          width={161}
          height={45}
          alt="logo"
          layout="intrinsic"
        />
        <div className={styles.menus}>
          <ul className="text-sm">
        <li><Link href="/about">
        <a>About</a>
        </Link></li>
            <li><Link href="/ministers">
        <a>Ministers</a>
        </Link></li>
            <li>Stream</li>
            <li>Store</li>
            <li>FAQ</li>
          </ul>
        </div>
        {!isMobile && (
          <div className="buttonWrapper max1200:hidden">
            <button className={`buttonPrimary text-sm`}>
              Register for Conference
            </button>
            <button className={`buttonTransparent text-sm`}>Login</button>
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
