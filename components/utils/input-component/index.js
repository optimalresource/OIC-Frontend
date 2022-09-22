import React from "react";
import styles from "./InputComponent.module.css";

const InputComponent = ({ type, className }) => {
  return (
    <div className={styles.formGroup}>
      <input {...type} {...className} />
    </div>
  );
};

export default InputComponent;
