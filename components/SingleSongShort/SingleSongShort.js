import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./SingleSongShort.module.css";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const drake =
  "https://cdns-images.dzcdn.net/images/cover/6e7a6c8f36669dcd11abe7e7c3222e91/264x264.jpg";

function SingleSongShort({ album }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.songCover}>
          <Image
            src={album.img ? album.img : "/images/albumPlaceholder.png"}
            layout="fill"
            objectFit="cover"
            alt="largeImg"
            style={{ borderRadius: 5 }}
          />
        </div>
        <div>
          <Typography fontSize={16}>{album.title}</Typography>
          <Typography fontSize={14} color={"secondary"}>
            {album.primaryType}
          </Typography>
        </div>
      </div>
      <IconButton color="gray">
        <MoreVertOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default SingleSongShort;
