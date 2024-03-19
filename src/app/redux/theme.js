"use client";
import React from "react";
import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";


import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const grey ="grey"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});



export const theme = createTheme({
  palette: {
    primary:{ main:"#ff8b18b0"},
    mode: "light",
  },
});
