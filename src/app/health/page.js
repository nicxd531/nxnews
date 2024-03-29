import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import HealthMain from "../../components/health/HealthMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  // main health component
  return (
    <Box sx={{px:{xs:2,lg:4},mt:6}}>
        <Box>
            <SearchBar/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <HealthMain/>
            <Aside/>
        </Box>
    </Box>
  )
}

export default page