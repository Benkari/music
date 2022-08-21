import React from "react";
import styles from "./CustomTextInput.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function CustomTextInput() {
  return (
    <div className={styles.container}>
      <SearchOutlinedIcon color="gray" sx={{ fontSize: 18 }} />
      <form className={styles.form}>
        <input
          type="text"
          id="fname"
          name="fname"
          className={styles.textInput}
          placeholder="Search for songs, artist, lyrics"
        />
      </form>
    </div>
  );
}

export default CustomTextInput;
