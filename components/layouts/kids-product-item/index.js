import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./KidsProductItem.module.css";
// import {kidsPaylink} from '../../../data/products'
const KidsProductItem = ({ name, price, imageUrl, paymentLink }) => {
  return (
    <div className={styles.container}>
      <a>
        <Image src={imageUrl} alt="hi" />
      </a>
    </div>
  );
};

export default KidsProductItem;
