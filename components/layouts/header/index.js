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
  const isMobile = useMediaQuery({ query: mediaQueries.mobileQuery });

  return (
    <>
      <div className={styles.container}>
        <Image
          src="/assets/images/svgs/new_logo.svg"
          width={210}
          height={60}
          alt="logo"
        />
        <div className={styles.menus}>
          <ul>
            <li>Home</li>
            <li>Register</li>
            <li>Ministers</li>
          </ul>
          {!isMobile && (
            <button className={`buttonPrimary`}>
              <Icon icon="bi:person" /> Login
            </button>
          )}
        </div>
        <div
          className={styles.menuIcon}
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
