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

export function Header() {
  const [menuToggled, setMenuToggled] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1040px)" });

  return (
    <>
      <div
        className={`${styles.container} top-[50px] px-[5%] py-[20px] min641:pt-[10px] max640:top-[0]`}
      >
        <Image
          src="/assets/images/svgs/logo3.svg"
          width={215}
          height={60}
          alt="logo"
          layout="intrinsic"
        />
        <div className={styles.menus}>
          <ul className="text-sm">
            <li>About</li>
            <li>Ministers</li>
            <li>Stream</li>
            <li>Store</li>
            <li>FAQ</li>
          </ul>
        </div>
        {!isMobile && (
          <div className="buttonWrapper max1040:hidden">
            <button className={`buttonPrimary text-sm`}>
              Register for Conference
            </button>
            <button className={`buttonTransparent text-sm`}>Login</button>
          </div>
        )}
        <div
          className={`${styles.menuIcon} w-[100px] text-right min1041:hidden`}
          onClick={() => setMenuToggled((previous) => !previous)}
        >
          <Icon icon="ant-design:menu-outlined" />
        </div>
      </div>
      {menuToggled && isMobile && (
        <MobileMenu menuToggled={menuToggled} setMenuToggled={setMenuToggled} />
      )}
    </>
  );
}

export default Header;
