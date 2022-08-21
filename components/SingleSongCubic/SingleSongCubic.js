import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./SingleSongCubic.module.css";

const drake =
  "https://cdns-images.dzcdn.net/images/cover/6e7a6c8f36669dcd11abe7e7c3222e91/264x264.jpg";

function SingleSongCubic({ album }) {
  return (
    <div className={styles.container}>
      <div className={styles.songCover}>
        <Image
          style={{ borderRadius: 5 }}
          src={album.img ? album.img : "/images/albumPlaceholder.png"}
          layout="fill"
          objectFit="cover"
          alt="largeImg"
        />
      </div>
      <Typography fontSize={14}>Alone With You</Typography>
      <Typography color={"secondary"} fontSize={12}>
        {album.title}
      </Typography>
    </div>
  );
}

export default SingleSongCubic;
