import Image from "next/image";
import React from "react";
import styles from "./AvailablePositions.module.css";

const AvailablePositions = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h2>Available Positions</h2>
      </section>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/assets/images/position-medical.png"
            alt="oic"
            width={350}
            height={350}
            layout="intrinsic"
          />
          Medical
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/images/position-hospitality.png"
            alt="oic"
            width={350}
            height={350}
            layout="intrinsic"
          />
          Hospitality
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/images/position-ushering.png"
            alt="oic"
            width={350}
            height={350}
            layout="intrinsic"
          />
          Ushering
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/images/position-media.png"
            alt="oic"
            width={350}
            height={350}
            layout="intrinsic"
          />
          Media
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/images/position-registration.png"
            alt="oic"
            width={350}
            height={350}
            layout="intrinsic"
          />
          Registration
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/images/position-security.png"
            alt="oic"
            width={350}
            height={350}
            layout="intrinsic"
          />
          Security
        </div>
      </div>
    </div>
  );
};

export default AvailablePositions;
