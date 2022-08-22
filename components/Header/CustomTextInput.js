import React from "react";
import styles from "./CustomTextInput.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SingleSongLong from "../SingleSongLong/SingleSongLong.js";
import { getMusician, getOnesAlbums } from "../../apiRequests/getMusican";
import { CircularProgress } from "@mui/material";
import FavListContext from "../../FavListContext";

const album = {
  title: "Views",
  img: "",
  primaryType: "Album",
};

const useClickOutside = (handler) => {
  const domNodeRef = React.useRef();

  React.useEffect(() => {
    const handleWorker = (event) => {
      if (!domNodeRef.current.contains(event.target)) {
        handler();
        document.body.style.overflowY = "auto";
      }
    };
    document.addEventListener("mousedown", handleWorker);

    return () => {
      document.removeEventListener("mousedown", handleWorker);
    };
  }, []);

  return domNodeRef;
};

function CustomTextInput() {
  const [searchActive, setSearchActive] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [albums, setAlbums] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { setMainScreenDimmed } = React.useContext(FavListContext);

  const domNodeRef = useClickOutside(() => {
    setSearchActive(false);
    setMainScreenDimmed(false);
  });

  React.useEffect(() => {
    const fetchSearch = async () => {
      const allArtists = await getMusician(input);
      const allAlbums = [];
      if (allAlbums) {
        allAlbums = await getOnesAlbums(allArtists[0]?.id);
        setAlbums(allAlbums);
      }
      if (allAlbums) setLoading(false);
    };

    if (input.length >= 2) {
      setLoading(true);
      fetchSearch();
    } else if (input.length <= 0) {
      setLoading(false);
      setAlbums([]);
    }
  }, [input]);

  return (
    <div
      className={searchActive ? styles.containerActive : styles.container}
      onClick={() => {
        setMainScreenDimmed(true);
        setSearchActive(true);
        document.body.style.overflow = "hidden";
      }}
      ref={domNodeRef}
    >
      <SearchOutlinedIcon color="gray" sx={{ fontSize: 18 }} />
      <form className={styles.form}>
        <input
          type="text"
          id="fname"
          name="fname"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.textInput}
          placeholder="Search for songs, artist, lyrics"
          autoComplete="off"
        />
      </form>
      {searchActive && <div className={styles.betweenLine} />}
      {searchActive && (
        <div className={styles.searchResultsContainer}>
          <div className={styles.searchResultsContainerList}>
            {loading && (
              <div className={styles.searchResultSpinner}>
                <CircularProgress />
              </div>
            )}
            {albums &&
              albums.map((eachAlbum, index) => (
                <SingleSongLong
                  key={eachAlbum.id}
                  album={eachAlbum}
                  index={index}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomTextInput;
