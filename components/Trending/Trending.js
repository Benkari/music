import { Typography } from "@mui/material";
import React from "react";
import FavListContext from "../../FavListContext";
import { addToStorage, getFromStorage } from "../../functions/addToStorage";
import SingleSongLong from "../SingleSongLong/SingleSongLong";
import styles from "./Trending.module.css";

function Trending({ drake }) {
  const { favList } = React.useContext(FavListContext);
  const isMounted = React.useRef(false);

  function isFav(id) {
    return favList.includes(id);
  }

  React.useEffect(() => {
    if (isMounted.current) {
      addToStorage("favList", favList);
    } else {
      isMounted.current = true;
    }
  }, [favList]);

  return (
    <div className={styles.container}>
      {drake.map((eachAlbum, index) => (
        <SingleSongLong
          key={eachAlbum.id}
          album={eachAlbum}
          index={index + 1}
          isFav={isFav(eachAlbum.id)}
        />
      ))}
    </div>
  );
}

export default Trending;
