import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import SportMain from "../../components/sport/SportMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  // main sport component 
  return (
    <Box sx={{px:{xs:2,lg:4},minHeight:"100vh",mt:4}}>
        <Box>
            <SearchBar/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <SportMain/>
            <Aside/>
        </Box>
    </Box>
  )
}

export default page