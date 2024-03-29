import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import BusinessMain from "../../components/business/BusinessMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  // main business page
  return (
    <Box sx={{px:{xs:2,lg:4}}}>
        <Box>
            <SearchBar/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <BusinessMain/>
            <Aside/>
        </Box>
    </Box>
  )
}

export default page