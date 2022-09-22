import React from "react";
import styles from "./Filter.module.css";
import ClickAwayListener from "components/utils/ClickAwayListener";
import FilterItems from "./FilterItems";
import { Icon } from "@iconify/react";

const Filter = ({ setFilterToggle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.simple_modal} tabIndex="0">
        <div className={styles.simple_wrapper}>
          <ClickAwayListener onClickAway={setFilterToggle}>
            <div className={styles.simple_modal__content}>
              <header>
                <h4>Search Filter</h4>
                {/* <span onClick={setFilterToggle}>close</span> */}
                <Icon
                  icon="ant-design:close-circle-twotone"
                  className={styles.close}
                  onClick={setFilterToggle}
                />
              </header>
              <div className={styles.modal_main}>
                <FilterItems />
              </div>
              <footer>
                <button className="grayButton p-sm">reset</button>
                <button className="button_primary p-sm">apply filter</button>
              </footer>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
};

export default Filter;
