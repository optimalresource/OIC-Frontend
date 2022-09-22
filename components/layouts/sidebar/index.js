import { Icon } from "@iconify/react";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkGroup}>
        <ul className={styles.links}>
          <li className={styles.active}>
            <Icon icon="bx:church" className={styles.icon} /> Office of the GO
          </li>
          <li>
            <Icon icon="mdi:church" className={styles.icon} /> National
            Headquarters
          </li>
          <li>
            <Icon icon="icon-park-twotone:church-one" className={styles.icon} />{" "}
            International Headquarters
          </li>
          <li>
            <Icon icon="healthicons:church" className={styles.icon} />{" "}
            International Office
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
