import React from "react";
import styles from "./RightBar.module.css";
import { IconButton, Typography } from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Playlist from "./Playlist";
import Player from "../Player/Player";

function RightBar({ omer }) {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.closeButtonContainer}>
          <IconButton color="gray">
            <CloseOutlinedIcon />
          </IconButton>
        </div>

        {/* Playist */}
        <div className={styles.playlistTitle}>
          <Typography variant="h6" fontWeight={600} fontSize={14}>
            Next On Your Playlist
          </Typography>
        </div>
        <div className={styles.playlistContainer}>
          <Playlist omer={omer} />
        </div>
      </div>

      {/* Player */}
      <div className={styles.playerCotainer}>
        <Player />
      </div>
    </div>
  );
}

export default RightBar;
