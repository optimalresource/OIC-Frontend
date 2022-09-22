import React from "react";
import styles from "./OneColumnLayout.module.css";

export function OneColumnLayout(props) {
  return <div className={styles.container}>{props.children}</div>;
}
