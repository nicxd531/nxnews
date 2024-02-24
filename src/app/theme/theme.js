
"use client"
import React from "react";
import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";
import themeReducer from "./ThemeMode"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Store } from "@/components/appbar/AppBar";

const roboto = Roboto({
    weight:["300","400","500","700"],
    subsets:["latin"],
    display:"swap"
});


const data =Store.getState().theme.value
console.log(data,"data")

export const theme = createTheme({
    palette: {
        mode: data
    }
})
