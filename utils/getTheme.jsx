import React from "react";
import { createTheme } from "@mui/material";
import sendTheme from "../zustand/sendTheme"

function getTheme() {
  const {selectedTheme}=sendTheme()
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto", // Change to your desired font family
    },
    palette: {
      primary: { main: "#ff8b18b0" },
      mode: selectedTheme ,
    },
  });
  return { theme};
}

export default getTheme;
