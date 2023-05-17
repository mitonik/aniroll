import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3db4f2",
      contrastText: "#fff",
    },
    background: {
      default: "#0b1622",
      paper: "#151f2e",
    },
  },
});

export default darkTheme;
