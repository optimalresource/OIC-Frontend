import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ClickAwayListener from "components/utils/ClickAwayListener";
import styles from "./SearchBox.module.css";
import Filter from "components/utils/modals/filter";

const SearchBox = ({
  boxShadow = false,
  setFilterToggle,
  increaseSize = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [toggleActive, setToggleActive] = useState("buy");
  return (
    <>
      <div
        className={`${styles.searchInput} ${
          boxShadow ? styles.boxShadow : ""
        } ${increaseSize ? "h-[60px] w-[90%]" : ""}`}
      >
        {toggleActive === "buy" && (
          <div className={styles.filterIcon} onClick={setFilterToggle}>
            <Icon
              icon="system-uicons:filtering"
              className={styles.searchFilter}
            />
          </div>
        )}
        {toggleActive === "buy" && (
          <input
            type="text"
            className={styles.searchInputField}
            placeholder="Enter location to begin search"
          />
        )}
        {toggleActive === "sell" && (
          <input
            type="text"
            className={styles.sellSearchInputField}
            placeholder="Enter location of property"
          />
        )}
        <div className={styles.searchButton}>
          <Icon icon="akar-icons:search" />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
