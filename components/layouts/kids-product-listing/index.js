import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./KidsProductListing.module.css";
import { products, kidsPaylink } from "../../../data/products";
const KidsProductListing = () => {
  let { kids } = products;
  return (
    <div className={`${styles.container} py-[100px] px-[5%]`}>
      <div className={styles.producttopic}>Oasis Kids</div>
      <div className="w-[100%] my-[30px]">
        <Image
          src="/assets/images/kids.png"
          width={1129}
          height={507}
          layout="intrinsic"
          alt="kids"
        />
      </div>

      <a href={kidsPaylink} target="_blank" rel="noreferrer">
        <button className="buttonPrimary no-radius sm-pt min-w-[200px] amd:w-[361px]">
          &#8358; {products.kids[0].price}
        </button>
      </a>
    </div>
  );
};

export default KidsProductListing;
