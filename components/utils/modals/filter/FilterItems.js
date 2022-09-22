import React, { Fragment, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { AllCategories } from "data/all-categories";
import styles from "./FilterItems.module.css";

export function FilterItems({ reset }) {
  const [value, setValue] = useState([0, 0]);
  const [priceToggle, setPriceToggle] = useState(true);
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const [subCategoriesToggle, setSubCategoriesToggle] = useState([0, false]);
  const [customizationToggle, setCustomizationToggle] = useState(false);
  const [categories, setCategories] = useState(
    AllCategories.filter((value) => value.isCategory)
  );
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const setMin = (event) => {
    let price = [event?.target?.value, value[1]];
    setValue(price);
  };
  const setMax = (event) => {
    let price = [value[0], event?.target?.value];
    setValue(price);
  };

  function addOrRemoveCategory(id) {
    let selectedCats;
    if (selectedCategories.indexOf(id) !== -1) {
      selectedCats = selectedCategories.filter((value) => value !== id);
    } else {
      selectedCats = [id, ...selectedCategories];
    }
    setSelectedCategories(selectedCats);
    console.log(selectedCategories);
  }

  function toggleSubCategory(id) {
    let selectedCat;
    let currentSub = AllCategories.filter(
      (category) => category.parents.indexOf(id) !== -1
    );
    if (id !== subCategoriesToggle[0]) {
      selectedCat = [id, true];
    } else {
      selectedCat = [id, !subCategoriesToggle[1]];
    }
    setSubCategoriesToggle(selectedCat);
    setSelectedSubCategories(currentSub);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalContent}>
        <div
          className={`${styles.modalContentRow} p-4 ${styles.toggleCursor}`}
          onClick={() => setPriceToggle(!priceToggle)}
        >
          <div>
            Price range (<span className="font-sans">₦</span>)
          </div>
          <motion.span
            initial="open"
            animate={priceToggle ? "open" : "close"}
            variants={{
              close: { rotate: "180deg" },
              open: { rotate: "0deg" },
            }}
          >
            <Icon
              icon="akar-icons:circle-chevron-up-fill"
              className={styles.searchFilter}
            />
          </motion.span>
        </div>
        {priceToggle && (
          <div className={`${styles.modalContentRow} px-4 pb-4`}>
            <div className={styles.minPrice}>
              <label>Min</label>
              <input type="number" onChange={setMin} value={value[0]} />
            </div>
            <div className={`${styles.maxPrice} ml-2`}>
              <label>Max</label>
              <input type="number" onChange={setMax} value={value[1]} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.modalContent}>
        <div
          className={`${styles.modalContentRow} p-4 ${styles.toggleCursor}`}
          onClick={() => setCategoriesToggle(!categoriesToggle)}
        >
          Categories
          <motion.span
            initial="close"
            animate={categoriesToggle ? "open" : "close"}
            variants={{
              close: { rotate: "180deg" },
              open: { rotate: "0deg" },
            }}
          >
            <Icon
              icon="akar-icons:circle-chevron-up-fill"
              className={styles.searchFilter}
            />
          </motion.span>
        </div>
        {categoriesToggle && categories.length > 0 && (
          <div className={`${styles.modalContentColumn} px-4 pb-4`}>
            {categories?.map((category, index) => {
              return (
                <Fragment key={index}>
                  <div className={`${styles.form_option} font-[poppins]`}>
                    <div
                      className={styles.form_option_left}
                      onClick={() => addOrRemoveCategory(category?.id)}
                    >
                      <Icon
                        icon={
                          selectedCategories.indexOf(category?.id) !== -1
                            ? "fluent:checkbox-checked-24-filled"
                            : "fluent:checkbox-unchecked-24-filled"
                        }
                        className={styles.checkbox}
                      />
                      <div className={styles.form_option_value}>
                        {category?.name}
                      </div>
                    </div>

                    <div
                      className={styles.customize}
                      onClick={() => toggleSubCategory(category?.id)}
                    >
                      customize
                    </div>
                  </div>
                  {subCategoriesToggle[0] === category?.id &&
                    subCategoriesToggle[1] && (
                      <div className={`${styles.subcategory} px-4 py-2`}>
                        {selectedSubCategories.map((subcategory, index) => {
                          return (
                            <div
                              className={`${styles.form_option} font-[poppins]`}
                              key={index}
                            >
                              <div
                                className={styles.form_option_left}
                                onClick={() =>
                                  addOrRemoveCategory(subcategory?.id)
                                }
                              >
                                <Icon
                                  icon={
                                    selectedCategories.indexOf(
                                      subcategory?.id
                                    ) !== -1
                                      ? "fluent:checkbox-checked-24-filled"
                                      : "fluent:checkbox-unchecked-24-filled"
                                  }
                                  className={styles.checkbox}
                                />
                                <div className={styles.form_option_value}>
                                  {subcategory?.name}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.modalContent}>
        <div
          className={`${styles.modalContentRow} ${styles.toggleCursor} p-4`}
          onClick={() => setCustomizationToggle(!customizationToggle)}
        >
          More Features{" "}
          <motion.span
            initial="close"
            animate={customizationToggle ? "open" : "close"}
            variants={{
              close: { rotate: "180deg" },
              open: { rotate: "0deg" },
            }}
          >
            <Icon
              icon="akar-icons:circle-chevron-up-fill"
              className={styles.searchFilter}
            />
          </motion.span>
        </div>
        {customizationToggle && (
          <div className="flex flex-col">
            <div className="px-4 pb-2">Land Area (Sqm)</div>
            <div className={`${styles.modalContentRow} px-4 pb-4`}>
              <div className={styles.minPrice}>
                <label>Min</label>
                <input type="number" onChange={setMin} value={value[0]} />
              </div>
              <div className={`${styles.maxPrice} ml-2`}>
                <label>Max</label>
                <input type="number" onChange={setMax} value={value[1]} />
              </div>
            </div>

            <div className="px-4 py-2">Bedroom</div>
            <div className={`${styles.modalContentRow} px-4 pb-4`}>
              <div className={styles.minPrice}>
                <label>Min</label>
                <input type="number" onChange={setMin} value={value[0]} />
              </div>
              <div className={`${styles.maxPrice} ml-2`}>
                <label>Max</label>
                <input type="number" onChange={setMax} value={value[1]} />
              </div>
            </div>

            <div className="px-4 py-2">Bathroom</div>
            <div className={`${styles.modalContentRow} px-4 pb-4`}>
              <div className={styles.minPrice}>
                <label>Min</label>
                <input type="number" onChange={setMin} value={value[0]} />
              </div>
              <div className={`${styles.maxPrice} ml-2`}>
                <label>Max</label>
                <input type="number" onChange={setMax} value={value[1]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterItems;
