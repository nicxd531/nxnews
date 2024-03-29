import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import PoliticalMain from "../../components/political/PoliticalMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  // main page component
  return (
    <Box sx={{px:{xs:2,lg:4}}}>
        <Box>
            <SearchBar/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <PoliticalMain/>
            <Aside/>
        </Box>
    </Box>
  )
}

export default page