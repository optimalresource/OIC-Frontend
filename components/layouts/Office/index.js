import Image from "next/image";
import React from "react";
import styles from "./Office.module.css";
// import { offices } from "data/offices";

const Office = ({
  offices = [],
  persons = [],
  personsTitle,
  addButtonTitle = "Add region",
  toggleAddModal = () => {},
}) => {
  return (
    <div className={styles.container}>
      {offices.length > 0 && (
        <>
          <div className={styles.topSection}>
            <div className="office_button">Offices</div>
          </div>
          <section className={styles.middleSection}>
            {offices.map((office, index) => {
              {
                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/assets/images/rccglogo.png"
                        width={150}
                        height={150}
                        layout="intrinsic"
                        alt="card"
                      />
                    </div>
                    <div className={styles.cardInfo}>{office?.title}</div>
                  </div>
                );
              }
            })}
          </section>
        </>
      )}

      {/* {persons.length > 0 && ( */}
      <>
        <div className={styles.ministersSection}>
          <div className={styles.ministerTitle}>Provincial Leaders</div>
          <div className={styles.addNewButton}>Add New Province</div>
        </div>
        <div className={styles.ministersContent}>
          <div className={styles.minister}>
            {/* <div style={{ width: "200px" }}> */}
            <Image
              src="/assets/images/1.jpg"
              alt="minister"
              width={266}
              height={200}
              layout="intrinsic"
            />
            {/* </div> */}
          </div>
        </div>

        {/* <section className={styles.middleSection}>
            {persons.map((person, index) => {
              {
                return (
                  person?.parentId === 1 && (
                    <div className={styles.card} key={index}>
                      <div className={styles.cardImage}>
                        <Image
                          src="/assets/images/rccglogo.png"
                          width={150}
                          height={150}
                          layout="intrinsic"
                          alt="card"
                        />
                      </div>
                      <div className={styles.cardInfo}>{person?.name}</div>
                    </div>
                  )
                );
              }
            })}
          </section> */}
      </>
      {/* )} */}
    </div>
  );
};

export default Office;
