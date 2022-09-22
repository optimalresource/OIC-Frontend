import Image from "next/image";
import React from "react";
import styles from "./Volunteers.module.css";
function Volunteers({}) {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.leftSection}>
          <h1>
            Welcome <br /> to Impact
          </h1>
          {/* <h1>Welcome to Impact</h1> */}
          <section>
            <span>07/22</span>
            <span>Lagos, Nigeria</span>
          </section>
        </div>
        <div className={styles.rightSection}>
          <Image
            src="/assets/images/oic.png"
            alt="oic"
            width={400}
            height={216}
            layout="intrinsic"
          />
          <button>Click to Serve</button>
        </div>
      </div>
    </div>
  );
}

export default Volunteers;
