"use Client"
import React from 'react'
import { Box, Container } from '@mui/material'
import MiniAppBar from './MiniAppBar'
import MaxAppBar from './MaxAppBar'

function AppBar() {
    return (
        <Box  sx={{mt:0}}>
           <MiniAppBar/>
           <MaxAppBar/>
        </Box>
    )
}

export default AppBar