import Image from "next/image";
import React from "react";
import styles from "./Player.module.css";
import PlayerController from "./PlayerController";

const drake =
  "https://cdns-images.dzcdn.net/images/cover/6e7a6c8f36669dcd11abe7e7c3222e91/264x264.jpg";

function Player() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src={drake}
          layout="fill"
          objectFit="cover"
          alt="largeImg"
          style={{ borderRadius: 5 }}
        />
        <div className={styles.imgOverlay} />
      </div>

      <div className={styles.controllerSection}>
        <PlayerController />
      </div>
    </div>
  );
}

export default Player;
