import { Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./CategoryCard.module.css";

import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

function CategoryCard({ category }) {
  return (
    <Card className={styles.container}>
      <Image
        src={category.background}
        layout="fill"
        objectFit="cover"
        alt="largeImg"
      />
      <div className={styles.musicIcon}>
        <MusicNoteOutlinedIcon color="white" sx={{ fontSize: 18 }} />
      </div>
      <div className={styles.bottomCard}>
        <Typography color={"#fff"} variant="span" fontWeight={600}>
          {category.name}
        </Typography>
        <Typography
          color={"#a5a8a5"}
          variant="span"
          fontWeight={400}
          fontSize={14}
        >
          120 new songs
        </Typography>
      </div>
    </Card>
  );
}

export default CategoryCard;
