import React from "react";
import styles from "./PlayerController.module.css";
import { IconButton, Slider, Typography } from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function PlayerController() {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <Typography fontSize={14}>Za kare</Typography>
        <Typography fontSize={12} color="secondary">
          SB Mafija
        </Typography>
      </div>
      <div className={styles.buttons}>
        <IconButton color="white" size="large">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton color="white" size="large">
          <PlayArrowIcon />
        </IconButton>
        <IconButton color="white" size="large">
          <SkipNextIcon />
        </IconButton>
      </div>
      <div className={styles.slideSection}>
        <Slider aria-label="sound" defaultValue={30} color="white" />
      </div>
    </div>
  );
}

export default PlayerController;
