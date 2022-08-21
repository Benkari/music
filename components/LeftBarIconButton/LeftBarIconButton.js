import { IconButton } from "@mui/material";
import React from "react";

function LeftBarIconButton({ icon, active }) {
  return (
    <div>
      <IconButton size="large" color={active ? "white" : "gray"}>
        {icon}
      </IconButton>
    </div>
  );
}

export default LeftBarIconButton;
