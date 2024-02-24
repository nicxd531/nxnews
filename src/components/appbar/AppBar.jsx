"use client"
import React from 'react'
import { Box, createTheme } from '@mui/material'
import MiniAppBar from './MiniAppBar'
import MaxAppBar from './MaxAppBar'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../../app/theme/ThemeMode"

export  const Store =configureStore({
    reducer:{
        theme:themeReducer
    }
})
const data =Store.getState().theme.value
export const theme = createTheme({
    palette: {
        mode: data
    }
})

function AppBar() {
    
    return (
        <Provider store={Store}>
            <Box sx={{ mt: 0 }}>
                <MiniAppBar />
                <MaxAppBar />
            </Box>
        </Provider>
    )
}

export default AppBar
