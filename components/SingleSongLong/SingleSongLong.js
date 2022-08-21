import React, { useEffect } from "react";
import styles from "./SingleSongLong.module.css";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

import addOrDeleteFromArray from "../../functions/addOrDeleteFromArray";
import FavListContext from "../../FavListContext";

function SingleSongLong({ album, index, isFav }) {
  const { favList, setFavList } = React.useContext(FavListContext);

  function toggleFav(id) {
    addOrDeleteFromArray(favList, setFavList, id);
  }

  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <Typography fontSize={14} color="secondary">
          {index}
        </Typography>
        <div className={styles.coverImage}>
          <Image
            src={album.img}
            layout="fill"
            objectFit="cover"
            alt="largeImg"
            style={{ borderRadius: 5 }}
          />
        </div>
        <div>
          <Typography fontSize={16} fontWeight={500}>
            {album.title}
          </Typography>
          <Typography fontSize={12} color="secondary">
            {album.primaryType}
          </Typography>
        </div>
      </div>

      {/* Right Side */}

      <div className={styles.rightSide}>
        <Typography fontSize={14} color="secondary">
          Always Never
        </Typography>
        <Typography fontSize={14} color="secondary">
          8.069.542
        </Typography>
        <Typography fontSize={14} color="secondary">
          3:58
        </Typography>
        <IconButton
          color={isFav ? "white" : "secondary"}
          onClick={() => toggleFav(album.id)}
        >
          {isFav ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default SingleSongLong;
