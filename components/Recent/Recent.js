import React from "react";
import { Typography } from "@mui/material";
import styles from "./Recent.module.css";
import SingleSongCubic from "../SingleSongCubic/SingleSongCubic";

function Recent({ sofi }) {
  return (
    <div className={styles.container}>
      {sofi.map((eachAlbum, index) => (
        <SingleSongCubic key={eachAlbum.id} album={eachAlbum} />
      ))}
    </div>
  );
}

export default Recent;
