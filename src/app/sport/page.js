import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import SportMain from "../../components/sport/SportMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  return (
    <Box sx={{px:{xs:2,lg:8}}}>
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