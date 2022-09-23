import Image from "next/image";
import React from "react";
import styles from "./WhyServe.module.css";

const WhyServe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2>Why Serve?</h2>
        <p>
          If you are willing to serve throughout the entire conference, we
          invite you to submit your application to be a servant leader below!
          You will receive an update on your application status after it has
          been processed. We appreciate your desire to serve this generation!
        </p>
      </div>
      <div className={styles.rightSection}>
        <Image
          src="/assets/images/why_serve.png"
          alt="oic"
          width={600}
          height={418}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default WhyServe;
