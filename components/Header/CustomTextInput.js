import React from "react";
import styles from "./CustomTextInput.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const useClickOutside = (handler) => {
  const domNodeRef = React.useRef();

  React.useEffect(() => {
    const handleWorker = (event) => {
      if (!domNodeRef.current.contains(event.target)) {
        handler(false);
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

  const domNodeRef = useClickOutside(setSearchActive);

  return (
    <div
      className={searchActive ? styles.containerActive : styles.container}
      onClick={() => setSearchActive(true)}
      ref={domNodeRef}
    >
      <SearchOutlinedIcon color="gray" sx={{ fontSize: 18 }} />
      <form className={styles.form}>
        <input
          type="text"
          id="fname"
          name="fname"
          className={styles.textInput}
          placeholder="Search for songs, artist, lyrics"
          autoComplete="off"
        />
      </form>
      {searchActive && <div className={styles.betweenLine} />}
      {searchActive && <div className={styles.searchResultsContainer}></div>}
    </div>
  );
}

export default CustomTextInput;
