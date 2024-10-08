import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import LifeMain from "../../components/life/LifeMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  // main life component
  return (
    <Box sx={{px:{xs:2,lg:4}}}>
        <Box>
            <SearchBar/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <LifeMain/>
            <Aside/>
        </Box>
    </Box>
  )
}

export default page