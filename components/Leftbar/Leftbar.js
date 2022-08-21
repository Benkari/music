import React from "react";
import styles from "./Leftbar.module.css";
import LeftBarIconButton from "../LeftBarIconButton/LeftBarIconButton";

// Icons
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Leftbar() {
  return (
    <div className={styles.container}>
      <div className={styles.iconList}>
        <div className={styles.top}>
          <div className={styles.topIcon}>
            <MusicNoteOutlinedIcon />
          </div>
          <LeftBarIconButton icon={<HomeOutlinedIcon />} active={true} />
          <LeftBarIconButton icon={<SearchOutlinedIcon />} active={false} />
          <LeftBarIconButton
            icon={<FavoriteBorderOutlinedIcon />}
            active={false}
          />
          <LeftBarIconButton
            icon={<KeyboardVoiceOutlinedIcon />}
            active={false}
          />
          <LeftBarIconButton icon={<ShowChartOutlinedIcon />} active={false} />
          <LeftBarIconButton
            icon={<FileDownloadOutlinedIcon />}
            active={false}
          />
          <LeftBarIconButton icon={<SortOutlinedIcon />} active={false} />
          <LeftBarIconButton icon={<AddOutlinedIcon />} active={false} />
        </div>
        <div className={styles.bottom}>
          <LeftBarIconButton icon={<LogoutOutlinedIcon />} active={false} />
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
