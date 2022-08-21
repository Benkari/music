import React from "react";
import styles from "./Categories.module.css";
import CategoryCard from "./CategoryCard";

import categories from "../../constants/categories";

function Categories() {
  return (
    <div className={styles.container}>
      {categories.map((eachCategory, index) => (
        <CategoryCard key={eachCategory.id} category={eachCategory} />
      ))}
    </div>
  );
}

export default Categories;
