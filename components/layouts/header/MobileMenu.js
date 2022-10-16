import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import ClickAwayListener from "components/utils/ClickAwayListener";
import { menu } from "data/menu";
import { Icon } from "@iconify/react";
import Image from "next/image";

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
          <div className="flex flex-col w-[100%] bmd:hidden">
            <ul className={styles.links}>
              {authMenu.map((value, index) => {
                return (
                  <li key={index}>
                    <div className={`${styles.menuList} gap-[20px]`}>
                      <Icon icon={value?.icon} className={styles.icon} />
                      <span>{value?.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
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
                              <div
                                className={`${styles.menuList} pl-4 flex gap-[10px]`}
                                key={i}
                              >
                                <Icon
                                  icon={item?.icon}
                                  className={`${styles.icon} text-[18px]`}
                                />
                                <span>{item?.title}</span>
                              </div>
                            );
                          })}
                      </div>
                    )}
                    {!value?.hasDropdown && (
                      <div className={`${styles.menuList} gap-[20px]`}>
                        <Icon
                          icon={value?.icon}
                          className={`${styles.icon} text-[24px]`}
                        />
                        <span>{value?.title}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="min641:hidden" />
          <div className="flex flex-col gap-3 min641:hidden">
            <div className="flex gap-2 items-center">
              <Icon icon="akar-icons:phone" />
              <span>+234 915 782 2911</span>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="uiw:mail-o" />
              <span>info@theoasislagos.com</span>
            </div>
          </div>

          <div className="flex items-center min641:hidden">
            <div className="flex gap-2 items-center">
              Follow :
              <Icon icon="akar-icons:instagram-fill" />
              <Icon icon="akar-icons:youtube-fill" />
              <Icon icon="akar-icons:facebook-fill" />
              <Icon icon="akar-icons:twitter-fill" />
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
