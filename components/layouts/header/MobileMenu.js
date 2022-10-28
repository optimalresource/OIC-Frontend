import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import ClickAwayListener from "components/utils/ClickAwayListener";
import { menu } from "data/menu";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ menuToggled, setMenuToggled }) => {
  const [dropdownState, setDropdownState] = useState(null);
  return (
    <>
      <div className="backdrop"></div>
      <ClickAwayListener onClickAway={() => setMenuToggled(!menuToggled)}>
        <div
          className={`flex flex-col h-full ${styles.mobileMenuItemsWrapper}`}
        >
          <div
            className={styles.closePanel}
            onClick={() => setMenuToggled(!menuToggled)}
          >
            <Icon icon="fontisto:close-a" />
          </div>

          <div className="flex flex-col w-[100%] amd:hidden">
            <ul className={styles.links}>
              {menu.map((value, index) => {
                return (
                  <li key={index}>
                    {value?.hasDropdown && (
                      <div className="flex flex-col items-start justify-center gap-2">
                        <div
                          className={`${styles.menuList} gap-[20px]`}
                          onClick={() =>
                            dropdownState === null || dropdownState !== index
                              ? setDropdownState(index)
                              : setDropdownState(null)
                          }
                        >
                          <Icon
                            icon={value?.icon}
                            className={`${styles.icon} text-[24px]`}
                          />
                          <span>{value?.title}</span>
                          <Icon icon="akar-icons:chevron-down" />
                        </div>
                        {dropdownState === index &&
                          value.children.map((item, i) => {
                            return (
                              <Link href={item?.url} key={i}>
                                <div
                                  className={`${styles.menuList} pl-4 flex gap-[10px]`}
                                  onClick={() => setMenuToggled(!menuToggled)}
                                >
                                  <Icon
                                    icon={item?.icon}
                                    className={`${styles.icon} text-[18px]`}
                                  />
                                  <span>{item?.title}</span>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    )}
                    {!value?.hasDropdown && (
                      <Link href={value?.url} key={index}>
                        <div
                          className={`${styles.menuList} gap-[20px]`}
                          onClick={() => setMenuToggled(!menuToggled)}
                        >
                          <Icon
                            icon={value?.icon}
                            className={`${styles.icon} text-[24px]`}
                          />
                          <span>{value?.title}</span>
                        </div>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* <div className="flex flex-col w-[100%] bmd:hidden">
              <ul className={styles.links}>
                {authMenu.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link href={value?.url}>
                        <div
                          className={`${styles.menuList} gap-[20px]`}
                          onClick={() => setMenuToggled(!menuToggled)}
                        >
                          <Icon icon={value?.icon} className={styles.icon} />
                          <span>{value?.title}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div> */}
          </div>
          <hr className="min641:hidden" />
          <div className="flex flex-col gap-3 min641:hidden">
            RCCG The Oasis
          </div>

          <div className="flex items-center min641:hidden">
            <div className="flex gap-2 items-center">
              Follow :
              <Link href="https://www.instagram.com/theoasislagos/">
                <a className="text-[#1f4477]"><Icon icon="akar-icons:instagram-fill" /></a>
              </Link>
              <Link href="https://www.youtube.com/c/TheOasisLagos">
                <a className="text-[#1f4477]"><Icon icon="akar-icons:youtube-fill" /></a>
              </Link>
              <Link href="https://www.facebook.com/theoasislagos">
                <a className="text-[#1f4477]"><Icon icon="akar-icons:facebook-fill" /></a>
              </Link>
              <Link href="https://twitter.com/theoasislagos">
                <a className="text-[#1f4477]"><Icon icon="akar-icons:twitter-fill" /></a>
              </Link>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};

export const authMenu = [
  {
    url: "/login",
    title: "Login",
    icon: "bi:person",
  },
];

export default MobileMenu;
