import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#00aeff",
      darker: "#053e85",
    },
    secondary: {
      main: "#696969",
    },
    white: {
      main: "#fff",
    },
    gray: {
      main: "#696969",
    },
  },
});

export default theme;
