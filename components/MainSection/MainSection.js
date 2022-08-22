import React from "react";
import styles from "./MainSection.module.css";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Recent from "../Recent/Recent";
import Trending from "../Trending/Trending";
import { Typography } from "@mui/material";
import FavListContext from "../../FavListContext";

function MainSection({ drake, sofi }) {
  const { mainScreenDimmed } = React.useContext(FavListContext);
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerSection}>
        <Header />
      </div>
      {/* Categories */}
      <div className={styles.categories}>
        <Typography className={styles.categoriesTitle}>Categories</Typography>
        <div className={styles.categoriesList}>
          <Categories />
        </div>
      </div>
      {/* Trending */}
      <div className={styles.trendingSection}>
        <Typography>Trending</Typography>
        <div className={styles.trendingSectionList}>
          <Trending drake={drake} />
        </div>
      </div>
      {/* Recent Section */}
      <div className={styles.recentSection}>
        <Typography className={styles.recentSectionTitle}>
          Recently Listened
        </Typography>
        <div className={styles.recentSectionList}>
          <Recent sofi={sofi} />
        </div>
      </div>
      {mainScreenDimmed && <div className={styles.mainScreenDimmer} />}{" "}
    </div>
  );
}

export default MainSection;
