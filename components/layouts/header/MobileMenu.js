import React from "react";
import styles from "./MobileMenu.module.css";
import ClickAwayListener from "components/utils/ClickAwayListener";
import { menu } from "data/menu";
import { Icon } from "@iconify/react";
import Image from "next/image";

const MobileMenu = ({ menuToggled, setMenuToggled }) => {
  return (
    <>
      <div className="backdrop"></div>
      <ClickAwayListener onClickAway={() => setMenuToggled(!menuToggled)}>
        <div
          className={`flex flex-col bg-[#fff] h-full ${styles.mobileMenuItemsWrapper}`}
        >
          <div
            className={styles.closePanel}
            onClick={() => setMenuToggled(!menuToggled)}
          >
            <Image
              src="/assets/images/svgs/logo.svg"
              width={210}
              height={60}
              alt="logo"
            />
            <Icon icon="fontisto:close-a" />
            {/* close */}
          </div>
          <div className={styles.linkGroup}>
            <ul className={styles.links}>
              {menu.map((value, index) => {
                return (
                  <li className={`${styles.menuList}`} key={index}>
                    <Icon icon={value?.icon} className={styles.icon} />{" "}
                    {value?.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default MobileMenu;
