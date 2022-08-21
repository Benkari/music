import React from "react";
import CustomTextInput from "./CustomTextInput";
import styles from "./Header.module.css";
import { Avatar, IconButton, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.searchInput}>
        <CustomTextInput />
      </div>
      <div className={styles.rightOptions}>
        <IconButton color="white">
          <Badge
            color="primary"
            overlap="circular"
            badgeContent=" "
            variant="dot"
          >
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <div className={styles.userInfo}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Benjamin"
            src="/images/ben.jpg"
          />
          <Typography variant="span" fontSize={14}>
            Benjamin
          </Typography>
          <IconButton color="gray">
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
