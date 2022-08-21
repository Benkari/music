import React from "react";
import styles from "./Playlist.module.css";
import SingleSongShort from "../SingleSongShort/SingleSongShort";

function Playlist({ omer }) {
  return (
    <div className={styles.container}>
      {omer.map((eachAlbum, index) => (
        <SingleSongShort key={eachAlbum.id} album={eachAlbum} />
      ))}
    </div>
  );
}

export default Playlist;
