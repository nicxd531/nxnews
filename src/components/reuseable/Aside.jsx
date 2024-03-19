import { Box } from '@mui/material'
import React from 'react'
import AsideNav from "../appbar/AsideNav"

import AsideNews from "./AsideNews"

function Aside() {
    return (
        <Box sx={{ width: "19%" ,display:{xs:"none",lg:"flex",flexDirection:"column"},height:"500px"}}>
            <AsideNav/>
            <AsideNews/>
        </Box>
    )
}

export default Aside