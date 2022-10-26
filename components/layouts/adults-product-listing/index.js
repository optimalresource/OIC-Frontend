import React from "react";
import styles from "./AdultsProductListing.module.css";
import { products } from "../../../data/products";
import Image from "next/image";
const AdultsProductListing = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.toptitle} w-[100%] max-w-[500px]`}>
        <div className={`${styles.topic} min641:mt-[50px] amd:mt-[unset]`}>
          Conference Merchandise
        </div>
        <div className={styles.subtopic}>
          Join us in making conference as colourful as possible and in spreading
          the message of Christ!
        </div>
      </div>
      <div className={`${styles.productstopic} bmd:mt-[30px] w-[100%]`}>
        Oasis Adults
      </div>

      <div className="w-[100%] mt-[50px] grid grid-cols-4 max400:grid-cols-1 bmd:grid-cols-2 max1140:grid-cols-3  gap-[20px] min1141:gap-[60px]">
        {products.adults.map(({ id, ...otherProps }) => (
          <ProductCard key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export const ProductCard = ({
  name,
  price,
  imageUrl,
  paymentLink,
  active = false,
}) => {
  return (
    <a href={paymentLink} target="_blank" rel="noreferrer">
      <div
        className={`flex flex-col items-center justify-center gap-5 text-center rounded-[17px] ${
          active ? "shadow-[0px_14.9487px_44.846px_rgba(46,33,61,0.08)]" : ""
        }  border-1 px-3 py-5 bmd:text-sm max400:text-base`}
      >
        <Image
          src={imageUrl}
          width={247}
          height={258}
          layout="intrinsic"
          alt="product"
        />
        {name}
        <button className="buttonPrimary no-radius sm-pt">
          &#8358; {price}
        </button>
      </div>
    </a>
  );
};

export default AdultsProductListing;
