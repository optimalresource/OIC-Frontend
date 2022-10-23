import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./AdultsProductItem.module.css";
const AdultsProductItem = ({ name, price, imageUrl, paymentLink }) => {
  return (
    <div className={styles.container}>
      <Image src={imageUrl} className={styles.imagecontainer} alt="hi" />
      <font className={styles.productname}>{name}</font>
      <div className={styles.paybutton}>
        <a href={paymentLink}>
          <button>&#8358;{price} </button>
        </a>
      </div>
    </div>
  );
};

export default AdultsProductItem;
